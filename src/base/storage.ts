/**
 * 存储loalStorage
 * @param key
 * @param value
 * @returns
 */
export const loalStorageSet = (key: string = '', value: string = ''): void => {
  window.localStorage.setItem(key, value);
};

/**
 * 获取localStorage
 * @param key
 * @returns
 */
export const loalStorageGet = (key: string = ''): string => {
  return window.localStorage.getItem(key);
};

/**
 * 删除localStorage
 * @param key
 * @returns
 */
export const loalStorageRemove = (key: string = ''): void => {
  window.localStorage.removeItem(key);
};

/**
 * 存储sessionStorage
 * @param key
 * @param value
 * @returns
 */
export const sessionStorageSet = (key: string = '', value: string = ''): void => {
  window.sessionStorage.setItem(key, value);
};

/**
 * 获取sessionStorage
 * @param key
 * @returns
 */
export const sessionStorageGet = (key: string = ''): string => {
  return window.sessionStorage.getItem(key);
};

/**
 * 删除sessionStorage
 * @param key
 */
export const sessionStorageRemove = (key: string = ''): void => {
  window.sessionStorage.removeItem(key);
};

/**
 * 设置cookie
 * @param key
 * @param value
 * @param expire
 */
export const setCookie = (key: string, value: string, expire: number): void => {
  const d: Date = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};

/**
 * 读取cookie
 * @param key
 * @returns
 */
export const getCookie = (key: string): string => {
  const cookieStr: string = decodeURI(document.cookie);
  const arr: string[] = cookieStr.split('; ');
  let cookieValue: string = '';
  for (let i = 0; i < arr.length; i++) {
    const temp: string[] = arr[i].split('=');
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};

/**
 * 删除cookie
 * @param key
 */
export const delCookie = (key: string): void => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
