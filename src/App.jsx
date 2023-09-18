import { useState } from "react";
import { nanoid } from "nanoid";
// importacion del component de lista "li"
import ListaItems from "./Components/listaItems";

function App() {
  const [nombreError, setNombreError] = useState(false);
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  // ****Verificar nombres&apellidos
  const [nombre, setNombre] = useState("");
  const [apellidosError, setApellidosError] = useState(false);
  const [edadError, setEdadError] = useState(false);
  // ***lista y items
  const [lista, setLista] = useState([
    { id: nanoid(9), content: "Pasar la prueba en woombat" },
  ]);
  const [item, setItem] = useState("");
  // ***Validacion items
  const [validation, setValidation] = useState(false);
  // ****Validacion edad
  const [mayor18, setMayor18] = useState("");
  // **creacion del objecto
  const [datosUsuario, setDatosUsuario] = useState([]);

  // ******** funccion para agregar item   ************
  function handleSubmit(e) {
    e.preventDefault();
    setNombreError(nombre.trim() === "" ? true : false);
    setApellidosError(apellidos.trim() === "" ? true : false);
    setEdadError(edad.trim() === "" ? true : false);

    if (!nombreError) {
      console.log("Nom:", nombre);
      console.log("Apellidos", apellidos);
      console.log("edad", edad);
    }
    // **si validacion 18, y poner parseInt para tenerlo un intiger
    setMayor18(parseInt(edad, 10) >= 18 ? true : false);

    // **validacion de los items de la lista de tareas
    if (item === "") {
      setValidation(true);
      return;
    }
    // **formato del item de la lista
    setLista([...lista, { id: nanoid(9), content: item }]);
    // **reset input
    setItem("");
    setValidation(false);

    //** agregar datos del usuario */
    const nuevoUsuarioDatos = {
      nombre: nombre,
      apellidos: apellidos,
      edad: edad,
    };
    setDatosUsuario([...datosUsuario, nuevoUsuarioDatos]);
  }
  // **funccion para borrar item child por el id
  function borrarItem(id) {
    setLista(lista.filter((item) => item.id !== id));
  }
  // *** integrar array de los datos al ingreso

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-5xl text-white text-center mb-5">
          Lista de tareas
        </h1>
        {!mayor18 && (
          <>
            <form onSubmit={handleSubmit} className="mb-10">
              <label htmlFor="lista-item" className="text-slate-100">
                Su nombre :
              </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="mt-2 p-2 block w-full rounded-md"
              />
              {nombreError && (
                <p className="bg-red-700">Escribe su nombre por favor</p>
              )}
              <label htmlFor="lista-item" className="text-slate-100">
                Sus apellidos :
              </label>
              <input
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                type="text"
                className="mt-2 p-2 block w-full rounded-md"
              />
              {apellidosError && (
                <p className="bg-red-700">Escribe sus apellidos por favor</p>
              )}
              <label htmlFor="lista-item" className="text-slate-100">
                Su Edad :
              </label>
              <input
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                type="number"
                className="mt-2 p-2 block w-50 rounded-md"
              />
              {edadError && (
                <p className="bg-red-700">Escribe su edad por favor</p>
              )}
              <button
                type="submit"
                className="center mt-3 px-7 p-2 bg-blue-500 text-white rounded"
              >
                Enviar
              </button>
              <br />
            </form>
          </>
        )}
        ;
        {!mayor18 ? (
          <h1 className="text-3xl text-white text-center">
            usted debe tener mas de 18 anos para acceder a la lista de tareas
          </h1>
        ) : (
          <>
            {/* formulario del elemento */}
            <form onSubmit={handleSubmit} className="mb-10">
              <h1 className="text-3xl text-white text-center">
                Bienvenido, {nombre} {apellidos}, por tener {edad} años, puedes
                usar organisar LISTA DE TAREAS.
              </h1>

              <label htmlFor="lista-item" className="text-slate-100">
                Agregar tarea
              </label>
              <input
                value={item}
                onChange={(e) => setItem(e.target.value)}
                type="text"
                className="mt-2 p-2 block w-full rounded-md"
              />
              {/* validador si no hay nada en el elemento*/}
              {validation && (
                <p className="bg-red-700">!!! escribe su tarea por favor!!!</p>
              )}

              <button className="mt-4 px-4 py-2 bg-red-200 rounded-lg min-w-[115px]">
                Agregar
              </button>
            </form>

            {/* mensaje de 0 tareas */}
            {lista.length === 0 && (
              <li className="text-white text-md text-center ">
                No tiene tareas
              </li>
            )}

            {/* container de la lista de las tareas */}
            <ul>
              {lista.map((item) => (
                <ListaItems
                  key={item.id}
                  itemData={item}
                  borrarItem={borrarItem}
                />
              ))}
            </ul>
          </>
        )}
        ;
      </div>
    </div>
  );
}

export default App;
