/**
 * Utility physics and spring lerping for smooth cursor movement and magnetic attraction
 */
export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

export function calculateMagneticPull(mouseX, mouseY, rect, maxStrength = 8) {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  const distance = Math.hypot(deltaX, deltaY);
  const maxDistance = Math.max(rect.width, rect.height) / 2;

  if (distance < maxDistance * 1.5) {
    const pullX = (deltaX / maxDistance) * maxStrength;
    const pullY = (deltaY / maxDistance) * maxStrength;
    return { x: pullX, y: pullY };
  }
  return { x: 0, y: 0 };
}
