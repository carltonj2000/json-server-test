const url = new URL(document.URL);
const id = url.searchParams.get("id");
const postsUrl = `http://${url.hostname}:3000/posts/${id}`;

const container = document.querySelector(".details");

const renderPosts = async () => {
  const res = await fetch(postsUrl);
  const post = await res.json();

  const template = `
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body}</p>`;

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
