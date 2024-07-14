import SchoolGame from "./components/SchoolGame";
import GameBoard from "./components/Gameboard";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SchoolGame/>}/>
          <Route path='/gameboard' element={<GameBoard/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
