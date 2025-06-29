//ejercicio1-Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.

async function getPeliculas() {
  try {
       const response = await fetch(`https://swapi.info/api/films`);

            if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }

    const data = await response.json();
    const filmsFiltrados = data.map(film => {
        return {
        titulo : film.title,
        fecha : film.release_date.slice(0, 4),
        }
    })

    return filmsFiltrados;
 
   
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getPeliculas()
    .then((datos) => console.log(datos));
