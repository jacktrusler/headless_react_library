import Cookies from 'js-cookie';

const getUser = () => {
  const user = Cookies.get('authUser');
  return typeof user === 'string' ? JSON.parse(user) : user;
};

const setUser = (user: any, options = {}) =>
  Cookies.set('authUser', JSON.stringify(user), options);

const removeUser = () => Cookies.remove('authUser');

const getJWTToken = () => Cookies.get('jwttoken');

const setJWTToken = (token: string, options = {}) =>
  Cookies.set('jwttoken', token, options);

const removeJWTToken = () => Cookies.remove('jwttoken');

const getRefreshToken = () => Cookies.get('refreshToken');

const setRefreshToken = (token: string) => Cookies.set('refreshToken', token);

const removeRefreshToken = () => Cookies.remove('refreshToken');

export default {
  getUser,
  setUser,
  removeUser,
  getJWTToken,
  setJWTToken,
  removeJWTToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
};
