export default function listaItems({ itemData, borrarItem }) {
  return (
    <li className="p-2 bg-zinc-200 my-3 rounded flex">
      <span>{itemData.content}</span>
      <button
        onClick={() => borrarItem(itemData.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200"
      >
        X
      </button>
    </li>
  );
}
