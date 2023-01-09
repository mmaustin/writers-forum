import { useAppContext } from "./context/appContext"

const App = () => {
  
  const {arrayChange, number, array} = useAppContext()

  const elements = array.map((e, i) => {
    console.log(array)
    return <p key={i}>{e}</p>
  })

  return (
    <>
      {elements}
      <button type="button" onClick={() => arrayChange(number+5)}></button>
    </>
  )
}
export default App
