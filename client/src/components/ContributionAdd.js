import { useAppContext } from "../context/appContext";
import {FormRow, Alert} from '../components';
import { useState } from "react";

const ContributionAdd = ({originalAuthorId, createdBy}) => {
    const {user, isLoading, showAlert, displayAlert, clearValues} = useAppContext();
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
        console.log(newContribution);
    }

  return (
    <div>Add A Contribution Here</div>
  )
}
export default ContributionAdd