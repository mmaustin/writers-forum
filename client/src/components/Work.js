import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import {IoMdPerson} from 'react-icons/io';
import {FcClock} from 'react-icons/fc';
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/Work';
import WorkInfo from "./WorkInfo";
import { Link } from 'react-router-dom';

const Work = ({_id, title, genre, content, contributions, createdBy, complete}) => {
  const {setEditWork, deleteWork, getWork} = useAppContext();
  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <WorkInfo icon={<IoMdPerson />} text={title} />
          <WorkInfo icon={<FaPlay />} text={genre} />
          <WorkInfo icon={<FaCalendarAlt />} text={contributions} />
          <WorkInfo icon={<FcClock />} text={complete} />
          <WorkInfo icon={<FcClock />} text={createdBy} />
        </div>        
        <footer>
          <div className='actions'>
          <Link to='add-work' className='btn edit-btn' onClick={()=> setEditWork(_id)}>Edit</Link>
          <button className='btn delete-btn'type='button' onClick={()=> deleteWork(_id)}>Delete</button>
          {/* <Link to='get-work' className='btn' onClick={()=> getWork(_id)}>Get Work</Link> */}
          <Link to={`get-work/${_id}`} className='btn'>Get Work</Link>
          </div>
        </footer>
        <main>
          <div className='main-icon'>{content.charAt(0)}</div>
          <div className='info'>
            <h5>{content}</h5>
          </div>
        </main>
      </div>
    </Wrapper>
  )
}
export default Work