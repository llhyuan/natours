export async function fetchUsers(id?: string) {
  const url = `${process.env.API_HOST}/users/` + id ?? "";
  const results = await fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2YzNDQ2MTBkZDkwYmQ1MTUzNDczMiIsImlhdCI6MTY5MTk5MjcyMywiZXhwIjoxNjkyMDc5MTIzfQ.mZKgE-vELFF5-yde0R3SIsoG4t0Qw8Pxhcf4AaIzdq0",
    },
  });

  return results.json();
}
