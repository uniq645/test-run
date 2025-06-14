// Fetch and display programmes
fetch('/programmes')
  .then(res => res.json())
  .then(programmes => {
    const container = document.getElementById('programmes-list');
    programmes.forEach(programme => {
      container.innerHTML += `
        <div class="programme-card">
          <h2>${programme.title}</h2>
          <img src="${programme.image}" alt="${programme.title}">
          <p>$${programme.price}</p>
          <div class="programme-description">${programme.description}</div>
        </div>
      `;
    });
  });