const deletePost = (id) => {
  const { hostname } = new URL(document.URL);
  const deleteUrl = `http://${hostname}:3000/posts/${id}`;
  fetch(deleteUrl, { method: "DELETE" });
};

const renderPosts = async () => {
  const { hostname } = new URL(document.URL);
  const postsUrl = `http://${hostname}:3000/posts?_sort=likes&_order=desc`;

  const res = await fetch(postsUrl);
  const posts = await res.json();

  let template = "";
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

window.addEventListener("DOMContentLoaded", () => renderPosts());
