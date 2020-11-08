const posts = [];

const deletePost = (id) => {
  const { hostname } = new URL(document.URL);
  const deleteUrl = `http://${hostname}:3000/posts/${id}`;
  fetch(deleteUrl, { method: "DELETE" });
};

const getPosts = async (searchStr) => {
  const { hostname } = new URL(document.URL);
  const q = searchStr ? `&q=${searchStr}` : "";
  const postsUrl = `http://${hostname}:3000/posts?_sort=likes&_order=desc${q}`;

  const res = await fetch(postsUrl);
  const json = await res.json();
  posts.length = 0;
  posts.push(...json);
  showPosts();
};

const showPosts = async () => {
  let template = "";
  if (posts.length === 0) template = "<h2>No posts</h2>";
  posts.forEach((post) => {
    template += `<div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body.slice(0, 100)}</p>
      <a href="/details.html?id=${post.id}">read more ...</a>
      <button onClick="deletePost(${post.id})">Delete</button>
    </div>\n`;
  });

  document.querySelector(".blogs").innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => getPosts());

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  getPosts(document.querySelector("input").value);
});
