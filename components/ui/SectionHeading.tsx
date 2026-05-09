export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-normal text-ipu-ink md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  );
}
