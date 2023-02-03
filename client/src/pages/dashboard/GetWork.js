import { Navigate,useParams} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";


const GetWork = () => {

  const {works} = useAppContext();
  const params = useParams();
  const workId = params.id
  const work = works.find(w => w._id === workId)
  //console.log(work);
  return (
    <>
        {work.length === 0 ? (<Navigate to='/'/>) : <h3>{work.title}</h3> }
        {work.genre}
        {work.content}
        <p></p>
        <ContributionsContainer {...work}/>
        <ContributionAdd createdBy={work._id} originalAuthorId={work.createdBy}/>
    </>
  )
}
export default GetWork