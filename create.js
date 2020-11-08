const setupPost = () => {
  const form = document.querySelector("form");
  const title = document.querySelector("input");
  const body = document.querySelector("textarea");

  const { hostname } = new URL(document.URL);
  const postsUrl = `http://${hostname}:3000/posts`;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(postsUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: title.value, body: body.value, likes: 0 }),
    });
    window.location.replace("/");
  });
};

window.addEventListener("DOMContentLoaded", () => setupPost());
