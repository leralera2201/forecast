import client from './client';

export const getForecast = ({lat,lng}) => client.get(`${process.env.REACT_APP_SECRET_KEY}/${lat},${lng}`);