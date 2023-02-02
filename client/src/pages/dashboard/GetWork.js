import { useEffect } from "react";
import { Navigate} from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const GetWork = () => {
  const {work, getWorkContributions} = useAppContext();

  useEffect(() => {
    getWorkContributions(work._id);
  }, [])
  

  return (
    <>
        {/* <h2>Do Not Refresh!!!</h2> */}
        {work.length === 0 ? (<Navigate to='/'/>) : <h3>{work.title}</h3> }
    </>
  )
}
export default GetWork