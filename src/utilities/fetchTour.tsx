export async function fetchTours(id?: string) {
  const url = `${process.env.API_HOST}/tours/` + (id ?? "");
  const results = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  return results.json();
}

export async function fetchTopPicks() {
  const url = `${process.env.API_HOST}/tours/top5`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const results = await response.json();

  return results.data.tours;
}

export async function fetchPopular() {
  const url = `${process.env.API_HOST}/tours/popular`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const results = await response.json();

  return results.data.tours;
}
