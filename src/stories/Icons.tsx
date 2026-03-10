// ─── Load all SVGs from src/assets/icons (embedded in bundle) ────────────────
const svgModules = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

// { 'search': '<svg viewBox="0 0 16 16">...</svg>', ... }
// Strip hardcoded width/height so icons scale via viewBox
export const icons: Record<string, string> = Object.fromEntries(
  Object.entries(svgModules).map(([path, raw]) => {
    const name = path.split('/').pop()!.replace('.svg', '');
    const normalized = raw
      .replace(/\s+width="[^"]*"/, '')
      .replace(/\s+height="[^"]*"/, '')
      .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"');
    return [name, normalized];
  })
);

export const iconNames = Object.keys(icons).sort();

// ─── Icon component ───────────────────────────────────────────────────────────

export interface IconProps {
  name: string;
  size?: number;
}

export function Icon({ name, size = 16 }: IconProps) {
  return (
    <span
      style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0 }}
      dangerouslySetInnerHTML={{
        __html: (icons[name] ?? '').replace('<svg', '<svg style="width:100%;height:100%"'),
      }}
    />
  );
}
