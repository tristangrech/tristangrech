#!/usr/bin/env bash
# Tell IndexNow (Bing, Yandex, Seznam, Naver) which URLs changed after a deploy.
# The key is public by design: IndexNow verifies it by fetching
# https://tristangrech.com/<key>.txt, the file in public/.
#   scripts/indexnow.sh https://tristangrech.com/en https://tristangrech.com/china
set -euo pipefail
KEY_FILE=$(ls "$(dirname "$0")/../public" | grep -E '^[0-9a-f]{32}\.txt$' | head -1)
KEY=${KEY_FILE%.txt}
[ $# -gt 0 ] || { echo "usage: $0 <url> [url...]" >&2; exit 1; }
URLS=$(printf '"%s",' "$@"); URLS="[${URLS%,}]"
curl -sS -o /dev/null -w 'IndexNow HTTP %{http_code}\n' -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d "{\"host\":\"tristangrech.com\",\"key\":\"$KEY\",\"keyLocation\":\"https://tristangrech.com/$KEY.txt\",\"urlList\":$URLS}"
