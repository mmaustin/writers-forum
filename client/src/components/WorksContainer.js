import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/WorksContainer';
import Loading from "./Loading";
import Work from "./Work";

const WorksContainer = () => {
  const {works, getWorks, isLoading, totalWorks, search, searchComplete, sort} = useAppContext();
  useEffect(() => {
    getWorks()
    // eslint-disable-next-line
  }, [search, searchComplete, sort])

  if(isLoading){
    return <Loading center />
  }
  
  if(works.length === 0){
    return(
      <Wrapper>
        <h3>No Works To Display . . . </h3>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {totalWorks} work{works.length > 1 && 's'} found
      </h5>
      <div className="events">
        {works.map(work => {
          return <Work key={work._id} {...work}/>
        })}
      </div>
    </Wrapper>
  )
}
export default WorksContainer