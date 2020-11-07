const url = new URL(document.URL);
const postsUrl = `http://${url.hostname}:3000/posts`;

const container = document.querySelector(".blogs");

const renderPosts = async () => {
  const res = await fetch(postsUrl);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `<div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body.slice(0, 100)}</p>
      <a href="/details.html?id=${post.id}">read more ...</a>
    </div>\n`;
  });

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
