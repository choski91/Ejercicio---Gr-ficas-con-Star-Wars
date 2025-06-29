//ejercicio1-Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.

// async function getPeliculas() {
//     try {
//         const response = await fetch(`https://swapi.info/api/films`);

//         if (!response.ok) {
//             throw new Error(
//                 `Error HTTP: ${response.status} - ${response.statusText}`
//             );
//         }

//         const data = await response.json();
//         const filmsFiltrados = data.map(film => {
//             return {
//                 titulo: film.title,
//                 fecha: film.release_date.slice(0, 4),
//             }
//         })

//         return filmsFiltrados;

//     } catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//     }
// }
// getPeliculas()
//     .then((datos) => {
//         // console.log(datos);
//         //trsnformacion de datos
//         let peliculas = [];
//         let fechas = [];
//         for (let i = 0; i < datos.length; i++) {
//             peliculas.push(datos[i].titulo);
//             fechas.push(datos[i].fecha);
//         }
//         console.log(peliculas);
//         console.log(fechas);
//         var data = {
//             labels: peliculas,
//             series: [fechas],
//         };


//         new Chartist.Line('.films', data);

//     });

//ejercicio2

async function getPersonajes() {
    try {
        const responseDos = await fetch(`https://swapi.info/api/people`);
        if (!responseDos.ok) {
            throw new Error(
                `Error HTTP: ${responseDos.status} - ${responseDos.statusText}`
            );
        }
        const dataDos = await responseDos.json();

        const personajesFiltrados = dataDos.map(personaje => {
            return {
                character: personaje.name,
                number: personaje.films.length,
            }
        })
        return personajesFiltrados;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getPersonajes()
    .then((dataDos) => {
        // console.log(dataDos);
        let personajes = [];
        let numeroPeliculas = [];
        for (let i = 0; i < dataDos.length; i++) {

            personajes.push(dataDos[i].character);

            numeroPeliculas.push(dataDos[i].number);
        }
        console.log(personajes);
        console.log(numeroPeliculas);

        var data = {
            labels: personajes,
            series: [numeroPeliculas],
        };


        new Chartist.Bar('.films', data);

    });