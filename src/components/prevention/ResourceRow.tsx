interface Resource {
  readonly name: string;
  readonly contact: string;
  readonly tel?: string | null;
  readonly url: string | null;
}

export function ResourceRow({
  resource,
  isFirst,
}: {
  readonly resource: Resource;
  readonly isFirst: boolean;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 ${!isFirst ? 'border-t border-[var(--border)]' : ''}`}
    >
      <p className="font-heading font-semibold text-base">{resource.name}</p>
      <div className="flex items-center gap-6 shrink-0">
        {resource.tel ? (
          <a href={`tel:${resource.tel}`} className="text-sm font-bold tabular-nums text-gold-theme transition-opacity hover:opacity-70">
            {resource.contact}
          </a>
        ) : (
          <span className="text-sm font-bold tabular-nums text-gold-theme">{resource.contact}</span>
        )}
        {resource.url && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-faint transition-opacity hover:opacity-60"
          >
            &#8599;
          </a>
        )}
      </div>
    </div>
  );
}
