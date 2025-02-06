
import Image from "next/image";

export default function Button({children, handleHomeClick}) {
  return (
    <>
      <button onClick={handleHomeClick} className="flex items-center bg-slate-300 text-slate-900 hover:bg-gray-400 hover:text-black px-5 py-4 rounded-md">
        {children}
      </button>
    </>
  );
}
