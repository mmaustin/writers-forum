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
            displayAlert();
            return
        }
        const newContribution = {contributor, contributorId, content, createdBy, originalAuthorId}
        createContribution(newContribution);
        setContent('');
    }

  return (
    <>
        <form onSubmit={onSubmit}>
            {showAlert && <Alert/>}
            <FormRow
                labelText='new contribution'
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