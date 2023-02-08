import { useAppContext } from "../context/appContext";
import {FormRow, Alert} from '../components';
import { useState} from "react";

const ContributionAdd = ({originalAuthorId, createdBy}) => {
    const {user, isLoading, showAlert, displayAlert, createContribution} = useAppContext();
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
            {showAlert && <Alert/>}
            <FormRow
                type='textarea'
                name='content'
                value={content}
                handleChange={onSetContent}
            />
            <button type='submit' disabled={isLoading}>Submit Contribution</button>
        </form>
    </>
  )
}
export default ContributionAdd