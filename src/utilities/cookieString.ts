interface CookieObj {
  name: string;
  value: string;
}

export function getCookieString(cookies: Array<CookieObj>) {
  const arr = cookies.map((cookie) => {
    return `${cookie.name}=${cookie.value}`;
  });

  if (arr) {
    return arr.join();
  } else {
    return "";
  }
}
