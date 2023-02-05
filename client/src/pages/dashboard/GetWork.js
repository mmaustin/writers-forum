import { Navigate,useParams} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";


const GetWork = () => {

  const {works} = useAppContext();
  const params = useParams();
  const workId = params.id
  const w = works.filter(w => w._id === workId)
  const work = w.map((wo,i)=>{
    return <div>
      <p key={i+1}>{wo.title} **** {wo.genre} **** {wo.content}</p>
    </div>
  })
  console.log(work);
  

  return (
    <>  {work.length !== 0 ? <>
        {work}
        <p></p>
        <ContributionsContainer {...work}/>
        <ContributionAdd createdBy={work._id} originalAuthorId={work.createdBy}/> </>
        : <Navigate to='/'/>}
    </>
  )
}
export default GetWork