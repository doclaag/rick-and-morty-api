const getCharacters = ( done ) => {
  fetch( 'https://rickandmortyapi.com/api/character' )
    .then( response => {
      if ( !response.ok ) {
        throw new Error( 'Network response was not ok' );
      }
      return response.json();
    } )
    .then( data => done( data ) )
    .catch( error => console.error( 'There has been a problem with your fetch operation:', error ) );
};

getCharacters(data => {
  const contentDiv = document.getElementById('content');
  data.results.forEach(element => {
    console.log(element)
    const characterHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${element.image}" class="card-img-top img-fluid" alt="${element.name}">
          <div class="card-body">
            <h3 class="card-title">${element.name}</h3>
            <p class="card-text"><strong>Status:</strong> ${element.status}</p>
            <p class="card-text"><strong>Species:</strong> ${element.species}</p>
            <p class="card-text"><strong>Location:</strong> ${element.origin.name}</p>
          </div>
        </div>
      </div>
    `;
    contentDiv.insertAdjacentHTML('beforeend', characterHTML);
  });
});