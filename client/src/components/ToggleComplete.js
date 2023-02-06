
const ToggleComplete = ({complete}) => {
  return (
    <h5>
        {complete === 'true' ? 'Work Completed' : 'Work in Progress'}
    </h5>
  )
}
export default ToggleComplete