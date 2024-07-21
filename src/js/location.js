const getCharacters = ( done ) => {
  fetch( 'https://rickandmortyapi.com/api/location' )
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
    console.log(data.results)
    const characterHTML = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h5 class="card-title">${element.type}</h5>
            <h5 class="card-title">${element.dimension}</h5>
          </div>
        </div>
      </div>
    `;
    contentDiv.insertAdjacentHTML('beforeend', characterHTML);
  });
});