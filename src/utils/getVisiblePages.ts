export function getVisiblePages(
  current: number,
  total: number
): (number | string)[] {
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (current > 3) pages.push(2, '...');
  else for (let i = 2; i < Math.min(6, total); i++) pages.push(i);

  const middleStart = Math.max(3, current - 1);
  const middleEnd = Math.min(total - 2, current + 1);

  for (let i = middleStart; i <= middleEnd; i++) {
    if (!pages.includes(i)) pages.push(i);
  }

  if (current < total - 2) pages.push('...', total);
  else {
    for (let i = total - 4; i < total; i++) {
      if (i > 1 && !pages.includes(i)) pages.push(i);
    }
    pages.push(total);
  }

  return pages;
}
