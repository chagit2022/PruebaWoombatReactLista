import { useState } from "react";
import { nanoid } from "nanoid";
// importacion del component de lista "li"
import ListaItems from "./Components/listaItems";

function App() {
  const [lista, setLista] = useState([
    { id: nanoid(9), content: "item1" },
    { id: nanoid(9), content: "item222222222" },
    { id: nanoid(9), content: "item3" },
  ]);

  const [item, setItem] = useState("");
  const [validation, setValidation] = useState(false);

  // ******** funccion para agregar item   ************
  function handleSubmit(e) {
    e.preventDefault();

    if (item === "") {
      setValidation(true);
      return;
    }

    setLista([...lista, { id: nanoid(9), content: item }]);
    // reset input
    setItem("");
    setValidation(false);
  }
  // funccion para borrar item child por el id
  function borrarItem(id) {
    setLista(lista.filter((item) => item.id !== id));
  }

  return (
    <div className="h-screen bg-slate-900 ">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-white mb-10">Valida tu entrada con tu mayoridad</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="lista-item" className="text-slate-100">
            Su nombre :
          </label>
          <input
            // value={}
            // onChange={(e) => setItem(e.target.value)}
            type="text"
            className="mt-2 p-2 block w-full rounded-md"
          />
          <label htmlFor="lista-item" className="text-slate-100">
            Su apellido :
          </label>
          <input
            // value={}
            // onChange={(e) => setItem(e.target.value)}
            type="text"
            className="mt-2 p-2 block w-full rounded-md"
          />
          <label htmlFor="lista-item" className="text-slate-100">
            Su Edad :
          </label>
          <input
            // value={}
            // onChange={(e) => setItem(e.target.value)}
            type="number"
            className="mt-2 p-2 block w-full rounded-md"
          />
        </form>
        <h1 className="text-3xl text-white text-center mb-5">
          Lista de tareas
        </h1>

        {/* formulario del input */}
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="lista-item" className="text-slate-100">
            Agregar tarea
          </label>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="mt-2 p-2 block w-full rounded-md"
          />
          {/* validador si no hay nada en el input*/}
          {validation && (
            <p className="bg-red-700">!!! escribe su tarea por favor!!!</p>
          )}

          <button className="mt-4 px-4 py-2 bg-red-200 rounded-lg min-w-[115px]">
            Agregar
          </button>
        </form>

        {/* mensaje de 0 tareas */}
        {lista.length === 0 && (
          <li className="text-white text-md text-center ">No tiene tareas</li>
        )}

        {/* container de la lista de las tareas */}
        <ul>
          {lista.map((item) => (
            <ListaItems key={item.id} itemData={item} borrarItem={borrarItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
