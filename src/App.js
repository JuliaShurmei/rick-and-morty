import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";
import "./App.scss";


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/:characterId' element={<SingleCharacter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
