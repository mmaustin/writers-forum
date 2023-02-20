import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import {Link} from 'react-router-dom';


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
                <h3>
                    Write amazing, or not so amazing, works together!!
                </h3>
                <Link to='/register' className='btn'> Login/Register</Link>
                <p></p>
                <Link to='/about' className='btn green-background'> About Page</Link>
            </div>
            <img src={main} alt='event scene' className='img main-img'/>
        </div>
    </Wrapper>
  )
}
export default Landing