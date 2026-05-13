const contenedor = document.getElementById("container-cards");

const traerNombres = async () => {
  try {
    contenedor.innerHTML = "";

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await respuesta.json();

    datos.forEach((nombre) => {
      contenedor.innerHTML += `
                <div class="card">
                    <p>${nombre.title}</p>
                </div>
            `;
    });
  } catch (error) {
    console.log(`Este es un error atrapado por el catch: ${error}`);
    contenedor.innerHTML = "<p>Hubo un error al cargar los nombres.</p>";
  }
};

traerNombres();
