export async function fetchReviews(id?: string) {
  const url = `${process.env.API_HOST}/tours/${id ?? "no_id"}/reviews`;
  const token = `Bearer ${process.env.DB_TOKEN}`;
  const results = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  return results.json();
}
