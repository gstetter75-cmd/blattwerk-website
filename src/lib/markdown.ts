/**
 * Lightweight markdown renderer for blog content.
 * Supports: paragraphs, bold, italic, links. No external dependencies.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderInline(text: string): string {
  let result = escapeHtml(text);

  // Bold: **text**
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic: *text*
  result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links: [text](/url)
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-accent hover:underline">$1</a>',
  );

  return result;
}

export function renderMarkdown(content: string): string {
  const blocks = content.split('\n\n').filter(Boolean);

  return blocks
    .map((block) => {
      const trimmed = block.trim();

      // Heading: **Title** on its own line (bold-only paragraph = subheading)
      if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
        const text = trimmed.replace(/^\*\*/, '').replace(/\*\*$/, '');
        return `<h2 class="font-heading font-semibold text-lg text-ink mt-6 mb-2">${escapeHtml(text)}</h2>`;
      }

      return `<p>${renderInline(trimmed)}</p>`;
    })
    .join('\n');
}
