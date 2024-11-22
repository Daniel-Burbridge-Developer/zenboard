export async function getRandomQuote() {
  const res = await fetch("https://zenquotes.io/api/random/", {
    method: "GET",
  });
  const data = await res.json();
  return data.content;
}
