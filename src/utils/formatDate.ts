export const formatDate = (...args: ConstructorParameters<typeof Date>) => {
  return new Date(...args).toLocaleDateString("de");
};
