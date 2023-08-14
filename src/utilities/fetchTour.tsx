export async function fetchTours(id?: string) {
  const url = `${process.env.API_HOST}/tours/` + (id ?? "");
  const results = await fetch(url);

  return results.json();
}
