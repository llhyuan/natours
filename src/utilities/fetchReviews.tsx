export async function fetchReviews(id?: string) {
  const url = `${process.env.API_HOST}/tours/${id ?? "no_id"}/reviews`;

  const results = await fetch(url, {
    method: "GET",
  });

  return results.json();
}
