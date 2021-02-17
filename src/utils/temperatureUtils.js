export const formatTemperature = (temperature) => {
  let fixedTemp = +temperature.toFixed(0);
  return `${fixedTemp <= 0 ? fixedTemp : "+" + fixedTemp}`;
};

export const getTemperature = (minTemp, maxTemp) => {
  return `${formatTemperature(minTemp)} / ${formatTemperature(maxTemp)}`;
};

export const transformToFarengate = (temp) => {
  return temp * 1.8 + 32;
};

export const transformToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};
