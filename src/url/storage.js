const key = "token";
const forget = "forget";
export const setStorage = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStroage = () => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return false;
  }
};
export const setFogetStorage = (data) => {
  localStorage.setItem(forget, JSON.stringify(data));
};

export const getForgetStorage = () => {
  if (localStorage.getItem(forget)) {
    return JSON.parse(localStorage.getItem(forget));
  } else {
    return false;
  }
};

export const clearStorage = () => {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  } else localStorage.removeItem(key);
};
