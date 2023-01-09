import { useAppContext } from "./context/appContext"

const App = () => {
  
  const {arrayChange, numberChange, clearNumber, number, array} = useAppContext()

  const elements = array.map((e, i) => {
    return <p key={i}>{e}</p>
  })

  return (
    <>
      {elements}
      <button type="button" onClick={() => arrayChange(5)}>Add To Array</button>
      <p></p>
      {number}
      <p></p>
      <button type="button" onClick={() => numberChange(3)}>Add To Number</button>
      <p></p>
      <button type="button" onClick={clearNumber}>Return to Zero</button>
    </>
  )
}
export default App
