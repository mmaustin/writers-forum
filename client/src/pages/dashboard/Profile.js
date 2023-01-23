import { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import {useAppContext} from '../../context/appContext';
import {FormRow, Alert} from '../../components';


const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [favoriteGenre, setfavoriteGenre] = useState(user?.favoriteGenre);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !favoriteGenre){
      displayAlert();
      return
    }
    updateUser({name, email, favoriteGenre});
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='Favorite Genre'
            name='favoriteGenre'
            value={favoriteGenre}
            handleChange={(e) => setfavoriteGenre(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile