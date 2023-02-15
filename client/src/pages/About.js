import { Logo } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';

const About = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='spacer'></div>
        <div className='container-about'>
            <div className='info'>
                <h2>What will this look like?</h2>
                <p>how</p>
                <p>much</p>
                <p>room</p>
                <Link to='/register' className='btn'> Login/Register</Link>
                <p></p>
                <Link to='/landing' className='btn green-background'>Home Page</Link>
            </div>
        </div>
    </Wrapper>
  )
}
export default About