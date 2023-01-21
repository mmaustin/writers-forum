import Wrapper from '../assets/wrappers/SmallSideBar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import {useAppContext} from '../context/appContext';

const SmallSideBar = () => {
  const {showSidebar, toggleSidebar} = useAppContext();  
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}
export default SmallSideBar