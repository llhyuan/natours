export async function fetchUsers(id?: string) {
  const url = `${process.env.API_HOST}/users/` + id ?? "";
  const token = `Bearer ${process.env.DB_TOKEN}`;
  const results = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  return results.json();
}
