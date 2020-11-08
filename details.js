const deletePost = (id) => {
  const { hostname } = new URL(document.URL);
  fetch(`http://${hostname}:3000/posts/${id}`, { method: "DELETE" });
  window.location.replace("/");
};

const renderPosts = async () => {
  const url = new URL(document.URL);
  const id = url.searchParams.get("id");
  const res = await fetch(`http://${url.hostname}:3000/posts/${id}`);
  const post = await res.json();

  const template = `
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body}</p>
      <button onclick="deletePost(${post.id})">Delete</button>`;

  document.querySelector(".details").innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
