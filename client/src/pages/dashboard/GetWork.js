import { useEffect } from "react";
import { Navigate} from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const GetWork = () => {
  const {work, getWorkContributions, workContributions, totalWorkContributions} = useAppContext();

  useEffect(() => {
    getWorkContributions();
  },[])

  const contributions = workContributions.filter(contrib => contrib.createdBy === work._id)
  

  return (
    <>
        {/* <h2>Do Not Refresh!!!</h2> */}
        {work.length === 0 ? (<Navigate to='/'/>) : <h3>{work.title}</h3> }
        {work.genre}
        {work.content}
        {work.contributions}
        <p></p>
    </>
  )
}
export default GetWork