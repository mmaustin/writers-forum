import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Register, Error } from "./pages"
import { AddWork, AllMyWorks, Profile, SharedLayout } from './pages/dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<AllMyWorks/>} />
          <Route path='add-work' element={<AddWork/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='/landing' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Error/>} />        
      </Routes>
    </BrowserRouter>
  )
}
export default App
