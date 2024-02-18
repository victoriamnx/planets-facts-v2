import { Header } from "./components/header";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main className="w-screen h-screen flex ">
        <nav>
          <ul className="flex w-screen gap-11 justify-center py-5 border-b border-gray">
          <li className="uppercase font-bold text-[9px] tracking-[1.93px]">overview</li>
          <li className="uppercase font-bold text-[9px] tracking-[1.93px]">structure</li>
          <li className="uppercase font-bold text-[9px] tracking-[1.93px]">surface</li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default App;
