# Showreel drop-in

The hero is wired for a video. To activate it:

1. Encode the recording (muted loop, 30-90s, target 10-25 MB):

   ffmpeg -i RAW.mov -vf "scale=1920:-2,fps=25" -c:v libx264 -crf 23 -preset slow -an -movflags +faststart showreel.mp4

2. Extract a poster frame:

   ffmpeg -i showreel.mp4 -ss 00:00:02 -frames:v 1 -q:v 3 showreel-poster.jpg

3. Put both files in this folder (`public/video/`).
4. Flip `showreel.available` to `true` in `src/lib/site.ts` (this also enables the VideoObject schema for GEO).
5. Build + deploy:

   npm run build && npx wrangler pages deploy out --project-name tristangrech --branch main --commit-dirty=true

Until then the hero shows the designed STANDBY state (drifting tungsten signal), which is intentional and fine to ship.
