import { useAppContext } from "./context/appContext"

const App = () => {
  
   const {arrayChange, number} = useAppContext()

  return (
    <>
      <div>App is what's up!</div>
      <p>{number}</p>
    </>
  )
}
export default App
