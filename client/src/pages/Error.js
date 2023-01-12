import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <main>
        <img src={img} alt="not-found"/>
        <h3>Page Not Found!</h3>
        <Link to='/'>Return Home</Link>
    </main>
  )
}
export default Error;