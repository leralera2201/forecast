export const formatNumber = (number) => {
  return `
    ${number < 10 ? `0${number}` : number}`;
};

export const getDay = (time) => formatNumber(new Date(time * 1000).getDate());

export const getMonth = (time) =>
  formatNumber(new Date(time * 1000).getMonth() + 1);

export const getYear = (time) => new Date(time * 1000).getFullYear();
