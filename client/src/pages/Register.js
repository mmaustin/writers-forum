import { useAppContext } from "../context/appContext";
import { Logo, FormRow, Alert } from "../components";
import { useState } from "react";
import Wrapper from '../assets/wrappers/RegisterPage';

const localState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

const Register = () => {
    const {showAlert} = useAppContext();
    const [values, setValues] = useState(localState)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        // const {name, email, password, isMember} = values;
        // if(!email || !password || (!isMember && !name)){
        //   displayAlert();
        //   return
        // }
        // const currentUser = {name, email, password};
        // if(isMember){
        //   loginUser(currentUser)
        // } else {
        //  registerUser(currentUser);
        // }
      }
      
      const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
      }
      
      const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value})
      }    

  return (
    <Wrapper className="full-page">

    </Wrapper>
  )
}
export default Register