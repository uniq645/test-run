// Fetch and display all blog posts
fetch('/blog')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('blog-list');
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post-card">
          <h2><a href="/single-blog.html?post=${post.slug}">${post.title}</a></h2>
          <p><em>Posted on ${new Date(post.date).toLocaleDateString()}</em></p>
          <p>${post.excerpt}</p>
        </div>
      `;
    });
  });