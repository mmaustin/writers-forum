import { useEffect } from "react";
import { Navigate} from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import ContributionAdd from "../../components/ContributionAdd";
import ContributionsContainer from "../../components/ContributionsContainer";

const GetWork = () => {
  const {work, getWorkContributions, workContributions, totalWorkContributions} = useAppContext();

  // useEffect(() => {
  //   getWorkContributions();
  // },[])

  // const contributions = workContributions.filter(contrib => contrib.createdBy === work._id)
  // const c = contributions.map((con,i)=>{
  //   return <p key={i}>{con.content}</p>
  // })

  return (
    <>
        {work.length === 0 ? (<Navigate to='/'/>) : <h3>{work.title}</h3> }
        {work.genre}
        {work.content}
        <p></p>
        <ContributionsContainer workId={work._id}/>
        <ContributionAdd/>
    </>
  )
}
export default GetWork