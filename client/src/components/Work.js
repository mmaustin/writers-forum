import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import {IoMdPerson} from 'react-icons/io';
import {FcClock} from 'react-icons/fc';
//import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/Work';
import WorkInfo from "./WorkInfo";

const Work = ({_id, title, genre, content, contributions, createdBy, complete}) => {

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
        {/* <footer>
          <div className='actions'>
          <Link to='add-event' className='btn edit-btn' onClick={()=> setEditEvent(_id)}>Edit</Link>
          <button className='btn delete-btn'type='button' onClick={()=> deleteEvent(_id)}>Delete</button>
          </div>
        </footer> */}
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