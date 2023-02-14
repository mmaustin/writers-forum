import { Navigate,useParams} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionsContainer from "../../components/ContributionsContainer";
import { v4 as uuidv4 } from 'uuid';
import Wrapper from '../../assets/wrappers/Contribution';


const GetWork = () => {

  const {works} = useAppContext();
  const params = useParams();
  const workId = params.id
  
  const workFound = works.filter(w => w._id === workId)
  
  const work = workFound.map(wo => {
    return <div key={uuidv4()}>
      <h3 className="contributions-caps">"{wo.title}"</h3>
      <p className="contributions-no-caps"><span className="contributor">{wo.name}</span>: {wo.content}</p>
    </div>
  })

  return (
     <Wrapper>
      <div className="content">
        {work.length !== 0 ? <>
        {work}
        <p></p>
        <ContributionsContainer {...workFound[0]}/>
         </>
        : <Navigate to='/'/>}
      </div>
    </Wrapper>
  )
}
export default GetWork