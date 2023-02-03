import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, Register, Error } from "./pages"
import { AddWork, AllMyWorks, Profile, SharedLayout, ProtectedRoute, GetWork } from './pages/dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
          <Route index element={<AllMyWorks/>} />
          <Route path='add-work' element={<AddWork/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='get-work/:id' element={<GetWork/>} />
        </Route>
        <Route path='/landing' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Error/>} />        
      </Routes>
    </BrowserRouter>
  )
}
export default App
