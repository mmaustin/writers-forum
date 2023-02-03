import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const ContributionsContainer = ({_id, contributions}) => {

    const {getWorkContributions, workContributions} = useAppContext();

    useEffect(() => {
      getWorkContributions();
      // eslint-disable-next-line
    },[])
  console.log(typeof workContributions);
    const wContributions = workContributions.filter(contrib => contrib.createdBy === _id)
    const allContributions = wContributions.map((con,i)=>{
      return <p key={i}>{con.content}</p>
    })

  return (
    <div>
        <h3>Contributions Go Here</h3>
        {contributions}
        <div>{allContributions}</div>
    </div>
  )
}
export default ContributionsContainer