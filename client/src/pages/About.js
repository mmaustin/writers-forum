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
                <h2>How Does It Work?</h2>
                <h4>1) Register</h4>
                <h4>2) As a registered author, you will be able to create a work and edit or delete that specific work.</h4>
                <h4>3) The creator of a work can also delete any contributions to that work.</h4>
                <h4>4) Once you register, you can contribute to any other work in progress.</h4>
                <h4>5) If a work's contributions have been exhausted, the author should edit the work to indicate that it has been completed.</h4>
                <h3>And that's it! start creating together!!</h3>
                <Link to='/register' className='btn'> Login/Register</Link>
                <p></p>
                <Link to='/landing' className='btn green-background'>Home Page</Link>
            </div>
        </div>
    </Wrapper>
  )
}
export default About