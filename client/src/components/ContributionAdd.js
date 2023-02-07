//This component needs to be placed inside of the contributions container component
//so that I'll have access to the work contributions array length.  Instead of 
//passing down props to this component via GetWork, I'll pass them from
//contributions container, which will have all of the work properties I need--via GetWork.

import { useAppContext } from "../context/appContext";
import {FormRow, Alert, Logo} from '../components';
import { useState} from "react";
import ContributionsContainer from "./ContributionsContainer";

const ContributionAdd = ({originalAuthorId, createdBy}) => {
    const {user, isLoading, showAlert, displayAlert, clearValues, createContribution} = useAppContext();
    const contributor = user.name;
    const contributorId = user._id;
    const [content, setContent] = useState('');

    const onSetContent = e => setContent(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(!contributor || !contributorId || !content || !createdBy || !originalAuthorId){
            console.log('please provide all values');
            displayAlert();
            return
        }
        const newContribution = {contributor, contributorId, content, createdBy, originalAuthorId}
        createContribution(newContribution);
        setContent('');
    }

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