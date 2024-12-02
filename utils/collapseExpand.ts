export const collapseSection = (content: HTMLElement) => {
  const element = content! as HTMLElement;
  if (!element) {
    return;
  }
  const sectionHeight = element.scrollHeight;

  element.style.height = sectionHeight + 'px';

  requestAnimationFrame(() => {
    element.style.height = 0 + 'px';
  });

  element.setAttribute('data-collapsed', 'true');
};

export const expandSection = (content: HTMLElement) => {
  const element = content;

  if (!element) {
    return;
  }

  const sectionHeight = element.scrollHeight;

  element.style.height = sectionHeight + 'px';

  requestAnimationFrame(() => {
    element.style.height = sectionHeight + 'px';
  });

  element.setAttribute('data-collapsed', 'false');
};
