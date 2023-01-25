import { useAppContext } from "../../context/appContext";
import {FormRow, Alert} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddWork = () => {
  const {showAlert, displayAlert, isLoading, title, genre, content, contributions, handleChange, clearValues, createWork } = useAppContext();
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!title || !genre || !content || !contributions ){
      displayAlert()
      return
    }
    // if(isEditing){
    //   editEvent();
    //   return
    // }
    createWork();
  }

  const handleEventInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }  

  return (
    <h3>Add Work</h3>
  )
}
export default AddWork