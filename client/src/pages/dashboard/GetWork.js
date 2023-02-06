import { Navigate,useParams} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";


const GetWork = () => {

  const {works} = useAppContext();
  const params = useParams();
  const workId = params.id
  const workArray = [];
  const w = works.filter(w => w._id === workId)
  // workArray.push(work)
  // console.log(workArray);
  const work = w.map((wo,i)=>{
    return <div>
      <p key={i+1}>{wo.title} **** {wo.genre} **** {wo.content}</p>
    </div>
  })
  

  return (
     <> 
        {work.length !== 0 ? <>
        {work}
        <p></p>
        <ContributionsContainer {...w[0]}/>
        <ContributionAdd createdBy={w[0]._id} originalAuthorId={w[0].createdBy}/>
         </>
        : <Navigate to='/'/>}
    </>
  )
}
export default GetWork