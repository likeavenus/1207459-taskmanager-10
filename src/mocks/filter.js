const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];

const generateFilters = () => {
  return filterNames.map((item)=> {
    return {
      name: item,
      count: Math.floor(Math.random() * 10)
    };
  });
};

export const filters = generateFilters();
