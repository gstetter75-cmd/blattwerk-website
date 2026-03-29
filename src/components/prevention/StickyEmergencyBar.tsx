export function StickyEmergencyBar({ isDE }: { readonly isDE: boolean }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-bg-elevated/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <p className="text-xs text-ink-muted hidden sm:block">
          {isDE ? 'Brauchst du Hilfe?' : 'Need help?'}
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="tel:112"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#b91c1c', color: '#fff' }}
          >
            {isDE ? 'Notruf 112' : 'Emergency 112'}
          </a>
          <a
            href="tel:+498001110111"
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border)] text-ink-muted transition-opacity hover:opacity-70"
          >
            Telefonseelsorge
          </a>
          <a
            href="mailto:praevention@blattwerk.dev"
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-accent text-accent transition-opacity hover:opacity-70"
          >
            {isDE ? 'Uns schreiben' : 'Write to us'}
          </a>
        </div>
      </div>
    </div>
  );
}
