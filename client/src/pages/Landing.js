import main from '../assets/images/main.svg';
import logo from '../assets/images/favicon.ico';
import Wrapper from '../assets/wrappers/LandingPage';
//import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt='landing logo' className='logo'/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Welcome to the Writers' Forum.
                </h1>
                <p>
                    Let's write amazing works together.
                </p>
                <button className='btn btn-hero'> Login/Register</button>
                &nbsp;&nbsp;<span className='landing-span'>Or View All Of The </span>&nbsp;&nbsp;
                <button className='btn btn-hero'> Completed Works </button>
            </div>
            <img src={main} alt='event scene' className='img main-img'/>
        </div>
    </Wrapper>
  )
}
export default Landing