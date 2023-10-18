const api = 'https://yts.mx/api/v2/list_movies.json';

fetch(api) // llama a la api
  .then((response) => response.json()) // traducime a json lo que recibiste
  .then(traerDatos);

function traerDatos(peliculas) {
  console.log(peliculas.data.movies);
  const contenedor = document.querySelector('container');

  peliculas.data.movies.forEach((pelicula) => {
    const htmlPelicula = `<div class="md:flex">
    <div class="md:shrink-0">
    <img alt="Movie poster" class="h-48 w-full object-cover md:h-full md:w-48" src="${pelicula.medium_cover_image}"> 
    </div>
    <div class="p-8">  
    <h3 class="uppercase tracking-wide text-xl text-indigo-800 font-semibold">${pelicula.title}</h3>    
    <p class="mt-2 text-slate-600 line-clamp-6 mb-4">${pelicula.synopsis}</p>
    <a class="text-indigo-700 hover:underline" href=${pelicula.url} target="_blank">Go to the movie</a></div></div>`;
    const e = document.createElement('div');
    e.className += 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6';
    e.innerHTML = htmlPelicula;

    container.append(e);
  });
}
