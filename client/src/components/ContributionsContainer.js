import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const ContributionsContainer = ({_id, contributions}) => {

    const {user, getWorkContributions, workContributions} = useAppContext();

    useEffect(() => {
      getWorkContributions();
      // eslint-disable-next-line
    },[])
  console.log(typeof workContributions);
    const wContributions = workContributions.filter(contrib => contrib.createdBy === _id)
    const allContributions = wContributions.map((con,i)=>{
      if(user._id === con.originalAuthorId){
        return <div>
                <p key={i}>{con.content}</p>
                <button type="button" onClick={()=> console.log(con._id)}>Delete</button>
              </div>
      } else {
        return <div>
          <p key={i}>{con.content}</p>
        </div>
      }
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