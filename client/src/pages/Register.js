import { useAppContext } from "../context/appContext";
import { Logo, FormRow, Alert } from "../components";
import { useState } from "react";

const localState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

const Register = () => {

    const [values, setValues] = useState(localState)

  return (
    <div>Register</div>
  )
}
export default Register