import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/WorksContainer';
import Loading from "./Loading";
import Work from "./Work";

const UserWorksContainer = () => {
  const {userWorks, getUserWorks, isLoading, totalUserWorks, user} = useAppContext();
  //console.log(totalUserWorks);
  useEffect(() => {
    getUserWorks()
    // eslint-disable-next-line
  }, [])

  //

  if(isLoading){
    return <Loading center />
  }
  
  if(userWorks.length === 0){
    return(
      <Wrapper>
        <h3>No Works To Display . . . </h3>
        {totalUserWorks}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {userWorks.length} work{userWorks.length > 1 && 's'} found
      </h5>
      <div className="events">
        {userWorks.map(work => {
          return <Work key={work._id} {...work}/>
        })}
      </div>
    </Wrapper>
  )
}
export default UserWorksContainer