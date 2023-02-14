import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { v4 as uuidv4 } from 'uuid';
import ContributionAdd from './ContributionAdd';
import Wrapper from '../assets/wrappers/Contribution';


const ContributionsContainer = ({_id, contributions, createdBy, complete}) => {

    const {user, getWorkContributions, workContributions, deleteContribution} = useAppContext();

    useEffect(() => {
      getWorkContributions();
      // eslint-disable-next-line
    },[])
  
    const wContributions = workContributions.filter(contrib => contrib.createdBy === _id)
    const allContributions = wContributions.map((con, i) =>{
      if(user._id === con.originalAuthorId){
        return <div  key={uuidv4()}>
                <p className="contributions-no-caps"><span className="contributor">{con.contributor}</span>: {con.content}</p>
                <button className="delete-btn" type="button" onClick={()=> deleteContribution(con._id)}>Delete</button>
              </div>
      } else {
        return <div key={uuidv4()}>
          <p >{con.content}</p>
        </div>
      }
    })

  return (
    <Wrapper>
      <div className="content">
        {contributions}
        <div>{allContributions}</div>
        <p></p>
        {wContributions.length < contributions &&
          <ContributionAdd createdBy={_id} originalAuthorId={createdBy}/>
        }
      </div>  
    </Wrapper>
  )
}
export default ContributionsContainer