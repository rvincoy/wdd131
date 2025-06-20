import recipes from "./recipes.mjs";
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  resultsDiv.innerHTML = '';

  const matches = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );
  console.log('You clicked search');

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p>No matching recipes found.</p>';
  } else {
    matches.forEach(recipe => {
      const recipeHTML = `
        <div class="recipe">
          <img src="${recipe.image}" alt="${recipe.name}" />
          <div class"inner">
            <h2>${recipe.name}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: 4 out of 5 stars"
            >
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
            </span>
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
          </div>
        </div>
      `;
      resultsDiv.innerHTML += recipeHTML;
    });
  }
});