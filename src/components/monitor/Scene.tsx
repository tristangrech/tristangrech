interface SceneProps {
  scene: string;
  label: string;
  title: string;
  sub?: string;
}

export default function Scene({ scene, label, title, sub }: SceneProps) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4 border-b border-line pb-3">
        <span className="tg-label text-ambr">{scene}</span>
        <span className="tg-label">{label}</span>
      </div>
      <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight mt-8 text-bone uppercase">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-dim max-w-xl leading-relaxed">{sub}</p> : null}
    </header>
  );
}
