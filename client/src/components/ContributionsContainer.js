import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { v4 as uuidv4 } from 'uuid';

const ContributionsContainer = ({_id, contributions}) => {

    const {user, getWorkContributions, workContributions, deleteContribution} = useAppContext();

    useEffect(() => {
      getWorkContributions();
      // eslint-disable-next-line
    },[])
  
    const wContributions = workContributions.filter(contrib => contrib.createdBy === _id)
    const allContributions = wContributions.map(con =>{
      if(user._id === con.originalAuthorId){
        return <div key={uuidv4()}>
                <p >{con.content}</p>
                <button type="button" onClick={()=> deleteContribution(con._id)}>Delete</button>
              </div>
      } else {
        return <div key={uuidv4()}>
          <p >{con.content}</p>
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