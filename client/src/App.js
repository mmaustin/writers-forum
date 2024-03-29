import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Register, Error, About } from "./pages";
import { AddWork, AllWorks, Profile, SharedLayout, ProtectedRoute, GetWork } from './pages/dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
          <Route index element={<AllWorks/>} />
          <Route path='add-work' element={<AddWork/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='get-work/:id' element={<GetWork/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error/>} />        
      </Routes>
    </BrowserRouter>
  )
}
export default App
