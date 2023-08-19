export async function isLoggedin(token: string) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/login`;
  const loginToken = `Bearer ${token}`;
  const results = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: loginToken,
    },
  });

  return results.json();
}
