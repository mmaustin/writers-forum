import { useEffect } from "react";
import { Navigate} from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const GetWork = () => {
  const {work, getWorkContributions, workContributions, totalWorkContributions} = useAppContext();

  useEffect(() => {
    getWorkContributions();
  },[])

  const contributions = workContributions.filter(contrib => contrib.createdBy === work._id)
  const c = contributions.map((con,i)=>{
    return <p key={i}>{con.content}</p>
  })

  return (
    <>
        {/* <h2>Do Not Refresh!!!</h2> */}
        {work.length === 0 ? (<Navigate to='/'/>) : <h3>{work.title}</h3> }
        {work.genre}
        {work.content}
        {work.contributions}
        <p></p>
        {c}
    </>
  )
}
export default GetWork