export default function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      <p className="text-[11px] tracking-[0.32em] uppercase text-ink/50">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-ink">
        {title}
      </h2>
      {body ? (
        <p className="mt-6 text-lg leading-relaxed text-muted">{body}</p>
      ) : null}
    </div>
  )
}