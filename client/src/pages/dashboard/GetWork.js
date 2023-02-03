import { Navigate} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";

const GetWork = () => {

  const {work} = useAppContext();

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