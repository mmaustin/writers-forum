import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
//import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
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
                <button className='btn btn-hero small-screen-button' > Completed Works </button>
            </div>
            <img src={main} alt='event scene' className='img main-img'/>
        </div>
    </Wrapper>
  )
}
export default Landing