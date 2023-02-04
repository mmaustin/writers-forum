import { useAppContext } from "../context/appContext";
import {FormRow, Alert, Logo} from '../components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContributionsContainer from "./ContributionsContainer";

const ContributionAdd = ({originalAuthorId, createdBy}) => {
    const {user, isLoading, showAlert, displayAlert, clearValues, createContribution} = useAppContext();
    const contributor = user.name;
    const contributorId = user._id;
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [returnPage, setReturnPage] = useState(false);

    const onSetContent = e => setContent(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(!contributor || !contributorId || !content || !createdBy || !originalAuthorId){
            displayAlert();
            return
        }
        const newContribution = {contributor, contributorId, content, createdBy, originalAuthorId}
        createContribution(newContribution);
        setContent('');
    }
    
    // useEffect(()=> {
    //     if(returnPage){
    //       setTimeout(()=>{
    //         getWorkContributions();
    //       }, 3000)
    //     }
    //   }, [])  
    //   console.log(workContributions);

  return (
    <>
        <h3>Add A Contribution Here</h3>
        <form onSubmit={onSubmit}>
             <FormRow
                type='textarea'
                name='content'
                value={content}
                handleChange={onSetContent}
            />
            <button type='submit'>Submit Contribution</button>
        </form>
    </>
  )
}
export default ContributionAdd