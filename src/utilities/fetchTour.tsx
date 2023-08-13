export async function fetchTours(id?: string) {
  const url = `${process.env.API_HOST}/tours/` + (id ?? "");
  const results = await fetch(url, {
    headers: {
      Authorization:
        "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2YzNDQ2MTBkZDkwYmQ1MTUzNDczMiIsImlhdCI6MTY5MTkyNDg5MSwiZXhwIjoxNjkyMDExMjkxfQ.Mpg8S-gwToA5zMoNYBUKhhUhsnPAWYXKvhE0nzUjBcg",
    },
  });

  if (!results.ok) {
    throw new Error("Fetch data failed");
  }

  return results.json();
}
