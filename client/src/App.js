import SchoolGame from "./components/SchoolGame";
import SchoolBoard from "./components/SchoolBoard";
import SchoolWin from "./components/SchoolWin";
import SchoolLose from "./components/SchoolLose";
import GroceryGame from "./components/GroceryGame";
import GroceryBoard from "./components/GroceryBoard";
import GroceryWin from "./components/GroceryWin";
import GroceryLose from "./components/GroceryLose";
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
          <Route path='/grocerygame' element={<GroceryGame/>}/>
          <Route path='/storeboard' element={<GroceryBoard/>}/>
          <Route path='/storewin' element={<GroceryWin/>}/>
          <Route path='/storelose' element={<GroceryLose/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
