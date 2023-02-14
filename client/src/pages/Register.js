import { useAppContext } from "../context/appContext";
import { Logo, FormRow, Alert } from "../components";
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/RegisterPage';
import {useNavigate} from 'react-router-dom'

const localState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

const Register = () => {
    const {showAlert, isLoading, displayAlert, registerUser, loginUser, user} = useAppContext();
    const navigate = useNavigate();

    const [values, setValues] = useState(localState)

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
          displayAlert();
          return
        }
        const currentUser = {name, email, password};
        if(isMember){
          loginUser(currentUser)
        } else {
          registerUser(currentUser);
        }
      }
      
      const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
      }
      
      const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value})
      }
      
      useEffect(()=> {
        if(user){
          setTimeout(()=>{
            navigate('/');
          }, 3000)
        }
      }, [user, navigate])      

  return (
    <Wrapper className="full-page">
      <form className='form' onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert/>}
        {!values.isMember && (<FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />)}
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        <p></p>
        <button type="submit" className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? <span className="color-green">Register</span> : <span className="color-green">Login</span>}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register