import { Link, Outlet } from "react-router-dom";
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
        <nav>
        <Link to='my-works'>my works</Link>
        <Link to='add-work'>add work</Link>
        <Link to='profile'>profile</Link>
        </nav>
        <Outlet/>
    </Wrapper>
  )
}
export default SharedLayout