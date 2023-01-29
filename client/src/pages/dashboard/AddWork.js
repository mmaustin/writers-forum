import { useAppContext } from "../../context/appContext";
import {FormRow, Alert} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddWork = () => {
  const {showAlert, displayAlert, isLoading, title, genre, content, contributions, handleChange, clearValues, createWork, isEditing, editWork } = useAppContext();
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!title || !genre || !content || !contributions ){
      displayAlert()
      return
    }
    if(isEditing){
      editWork();
      return
    }
    createWork();
  }

  const handleEventInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }  

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Event' : 'Add Event'}</h3>
        <h3>Add Work</h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          <FormRow
            type='text'
            name='title'
            value={title}
            handleChange={handleEventInput}
          />
          <FormRow
            type='text'
            name='genre'
            value={genre}
            handleChange={handleEventInput}
          />
            <FormRow
              type='textarea'
              name='content'
              value={content}
              handleChange={handleEventInput}
            />
          <FormRow
            type='number'
            name='contributions'
            value={contributions}
            handleChange={handleEventInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'            
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>          
        </div>
      </form>
    </Wrapper>
  )
}
export default AddWork