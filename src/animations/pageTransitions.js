/**
 * Project card expansion & dimming screen transition (< 700ms)
 * Allows smooth preview expansion and background darkening before opening project modal
 */
export function triggerProjectTransition(projectId, onComplete) {
  const backdropDim = document.createElement('div');
  backdropDim.className = 'project-transition-dimmer';
  document.body.appendChild(backdropDim);

  // Trigger expansion class on the project frame
  requestAnimationFrame(() => {
    backdropDim.style.opacity = '1';
  });

  // Complete within 500-600ms (< 700ms specification)
  setTimeout(() => {
    if (onComplete) onComplete();
    backdropDim.style.opacity = '0';
    setTimeout(() => {
      backdropDim.remove();
    }, 300);
  }, 500);
}
