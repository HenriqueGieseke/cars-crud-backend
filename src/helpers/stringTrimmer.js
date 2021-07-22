const stringTrimmer = (string) => {
  const trimmedString = string
    .toLowerCase()
    .normalize('NFD')
    .replace(/([\u0300-\u036f]|[\s])/g, '');

  return trimmedString;
};

export { stringTrimmer };
