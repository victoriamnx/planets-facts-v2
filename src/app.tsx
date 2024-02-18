import { Button } from "./components/button";
import { Header } from "./components/header";

function App() {
  return (
    <div className="w-screen h-screen">
     <Header/>
      <main className="">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button />  
      </main>
    </div>
  );  
}

export default App;
