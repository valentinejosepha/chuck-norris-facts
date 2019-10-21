function fetchChuckJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const chuckId = 1;
  const url = `https://api.chucknorris.io/jokes/random${chuckId}`;
  axios.get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(norris) {
      console.log('data decoded from JSON:', norris);

      // Build a block of HTML
      const chuckHtml = `
        <p><strong>${chuck.name}</strong></p>
        <img src="${chuck.sprites.front_shiny}" />
      `;
      document.querySelector('#pokemon').innerHTML = chuckHtml;
    });
}

fetchChuckJSON();