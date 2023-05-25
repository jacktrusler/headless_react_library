export function firstLastInitial(fullName: string) {
  if (!fullName) return '';
  const initials = fullName
    ?.split(' ')
    .map((n) => n[0])
    .join('');
  return initials[0].toUpperCase() + initials[1].toUpperCase();
}
