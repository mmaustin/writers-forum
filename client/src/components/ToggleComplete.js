
const ToggleComplete = ({complete}) => {
  return (
    <h5>
        {complete === 'true' ? <p className='completed'>Completed</p> : <p className="in-progress">In Progress</p>}
    </h5>
  )
}
export default ToggleComplete