import SchoolGame from "./components/SchoolGame";
import SchoolBoard from "./components/SchoolBoard";
import SchoolWin from "./components/SchoolWin";
import SchoolLose from "./components/SchoolLose";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SchoolGame/>}/>
          <Route path='/schoolboard' element={<SchoolBoard/>}/>
          <Route path='/schoolwin' element={<SchoolWin/>}/>
          <Route path='/schoollose' element={<SchoolLose/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
