import { RiQuillPenFill} from 'react-icons/ri';
import {BsFileEarmarkPersonFill} from 'react-icons/bs';
import {GiOpenBook} from 'react-icons/gi';
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/Work';
import WorkInfo from "./WorkInfo";
import { Link } from 'react-router-dom';
import ToggleComplete from './ToggleComplete';


const Work = ({_id, name, title, genre, content, createdBy, contributions, complete}) => {
  const {user, setEditWork, deleteWork} = useAppContext();



  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <WorkInfo icon={<GiOpenBook />} text={title} />
          <WorkInfo icon={<RiQuillPenFill />} text={genre} />
          <WorkInfo icon={<BsFileEarmarkPersonFill />} text={name} />
          <WorkInfo icon={<>Contributions Accepted:</>} text={contributions } />
        </div>
        <ToggleComplete complete={complete}/>
        <footer>
          <div className='actions'>
          {user._id === createdBy &&
          <>
          <Link to='add-work' className='btn edit-btn' onClick={()=> setEditWork(_id)}>Edit</Link>
          <button className='btn delete-btn'type='button' onClick={()=> deleteWork(_id)}>Delete</button>&nbsp;&nbsp;
          </>
          }
          </div>
        </footer>
        <p></p>
        <main>
          <div className='info'>
            <h5 className='snippet'>{content.substring(0,40)} . . .</h5>
            <Link to={`get-work/${_id}`} className='btn'>View Full Work</Link>
          </div>
        </main>
      </div>
    </Wrapper>
  )
}
export default Work