// recuperation de l'url de la page

const url = document.URL;

const id = url.substring(url.lastIndexOf( "=" ) + 1 );

alert(id)