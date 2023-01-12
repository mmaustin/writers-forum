import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Error } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='*' element={<Error/>} />        
      </Routes>
    </BrowserRouter>
  )
}
export default App
