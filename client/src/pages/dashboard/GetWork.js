import { Navigate,useParams} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";
import { v4 as uuidv4 } from 'uuid';


const GetWork = () => {

  const {works} = useAppContext();
  const params = useParams();
  const workId = params.id
  
  const workFound = works.filter(w => w._id === workId)
  
  const work = workFound.map(wo => {
    return <div key={uuidv4()}>
      <p >{wo.title} **** {wo.genre} **** {wo.content}</p>
    </div>
  })
  

  return (
     <> 
        {work.length !== 0 ? <>
        {work}
        <p></p>
        <ContributionsContainer {...workFound[0]}/>
        <ContributionAdd createdBy={workFound[0]._id} originalAuthorId={workFound[0].createdBy}/>
         </>
        : <Navigate to='/'/>}
    </>
  )
}
export default GetWork