export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function getAvatarColors(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const absHash = Math.abs(hash);
  // Use the golden angle to spread colors more evenly and reduce clustering
  const hue = (absHash * 137.508) % 360;
  const saturation = 60 + (absHash % 20);
  const lightness = 45 + (Math.floor(absHash / 20) % 20);
  const background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const text = lightness > 60 ? '#000' : '#fff';
  return { background, text };
}
