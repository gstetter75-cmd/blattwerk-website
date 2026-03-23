export function StrainCardSkeleton() {
  return (
    <div
      className="rounded-lg border border-[var(--border)] border-t-4 border-t-bg-elevated h-full"
      style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
    >
      <div className="p-5 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="h-5 w-32 bg-bg-elevated rounded animate-pulse" />
          <div className="h-5 w-14 bg-bg-elevated rounded-full animate-pulse" />
        </div>

        {/* THC / CBD */}
        <div className="h-4 w-28 bg-bg-elevated rounded animate-pulse" />

        {/* Effects */}
        <div className="flex gap-1.5">
          <div className="h-5 w-16 bg-bg-elevated rounded-full animate-pulse" />
          <div className="h-5 w-20 bg-bg-elevated rounded-full animate-pulse" />
          <div className="h-5 w-14 bg-bg-elevated rounded-full animate-pulse" />
        </div>

        {/* Flavors */}
        <div className="h-3.5 w-40 bg-bg-elevated rounded animate-pulse" />

        {/* Rating */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--border)]">
          <div className="h-3.5 w-20 bg-bg-elevated rounded animate-pulse" />
          <div className="h-3.5 w-8 bg-bg-elevated rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
