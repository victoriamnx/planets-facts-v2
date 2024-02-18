export function Button() {
  return (
    <button
      type="button"
      className="w-[350px] flex px-7 py-3 gap-7 text-center text-slate-300 uppercase group bg-transparent outline-none ring-2 ring-darkGray hover:bg-darkGray focus:bg-coolBlue focus-visible:ring-2 focus:ring-coolBlue font-spartan text-xs font-bold tracking-[2.57px] leading-6"
    >
      <span className="text-red-400 group-hover:text-white font-spartan text-xs font-bold tracking-[2.57px] leading-6 text-gray">
        01
      </span>
      button
    </button>
  );
}
