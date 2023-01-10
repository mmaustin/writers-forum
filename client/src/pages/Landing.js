import main from '../assets/images/main.svg';
import logo from '../assets/images/favicon.ico';

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt='landing logo' className='logo'/>
        </nav>
        <div className='container'>
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
            <p></p>
            <img src={main} alt='event scene' className='img'/>
        </div>
    </main>
  )
}
export default Landing