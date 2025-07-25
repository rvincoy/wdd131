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
  matches.sort((a,b) => a.name.localeCompare(b.name));
  //console.log('You clicked search');

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p>No matching recipes found.</p>';
  } else {
    matches.forEach(recipe => {
      const recipeHTML = `<figure class="recipe">
          <img src="${recipe.image}" alt="${recipe.name}" />
          <figcaption>
            <ul class="recipe__tags">
              ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
              <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars"
              >
                ${ratingTemplate(recipe.rating)}
              </span>
            </p>
            <p class="recipe__description">
              ${recipe.description}
            </p>
        </figcaption>
        </figure>`;
      resultsDiv.innerHTML += recipeHTML;
    });
  }
});

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<ul class="recipe__tags">
      ${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: ${recipe.rating} out of 5 stars"
			>
				${ratingTemplate(recipe.rating)}
			</span>
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function tagsTemplate(tags) {
  let html=``;
  //console.log(tags);
	//for (let i=0; i<tags.length; i++) {
   // html = html + `<li>` + tags[i] + `</li>`;
  //}

	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
  for (let i=1; i<=5; i++) {
    if (i <= rating)
    	html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    else
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
	html += `</span>`;
	// return the html string
	return html;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.
  //console.log(recipeList);
  const recipeHTML = recipeTemplate(recipeList);
  const resultsDiv1 = document.getElementById('results');
  resultsDiv1.innerHTML = recipeHTML;

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes);

  // render the recipe with renderRecipes.
  renderRecipes(recipe);
}
init();