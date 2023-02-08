import { useAppContext } from "../../context/appContext";
import {FormRow, Alert, FormRowSelect} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddWork = () => {
  const {showAlert, displayAlert, isLoading, title, genre, content, contributions, complete, completeOptions, handleChange, clearValues, createWork, isEditing, editWork} = useAppContext();
  
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

  const handleWorkInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }  

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Work' : 'Add Work'}</h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          <FormRow
            type='text'
            name='title'
            value={title}
            handleChange={handleWorkInput}
          />
          <FormRow
            type='text'
            name='genre'
            value={genre}
            handleChange={handleWorkInput}
          />
            <FormRow
              type='textarea'
              name='content'
              value={content}
              handleChange={handleWorkInput}
            />
          <FormRow
            type='number'
            name='contributions'
            value={contributions}
            handleChange={handleWorkInput}
          />
          <FormRowSelect
            name='complete'
            value={complete}
            handleChange={handleWorkInput}
            list={completeOptions}
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