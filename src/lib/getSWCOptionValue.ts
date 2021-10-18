export const getSWCOptionValue = <T extends string>(event: Event) => {
  const value = (event.target as HTMLSelectElement).value;
  return value as T;
};
