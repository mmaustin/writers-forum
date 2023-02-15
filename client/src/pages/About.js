import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';

const About = () => {
  return (
    <Wrapper>
        <div className='container page'>
            <div className='info'>
                <h2>What will this look like?</h2>
                <Link to='/register' className='btn'> Login/Register</Link>
                <p></p>
                <Link to='/landing' className='btn green-background'>Home Page</Link>
            </div>
        </div>
    </Wrapper>
  )
}
export default About