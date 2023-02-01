import mongoose from "mongoose";

const ContributionSchema = mongoose.Schema({
    contributor: {
        type: String,
        required: [true, 'Please provide a name.'],
        trim: true
    },
    contributorId: {
        type: String,
        required: [true, 'Please provide the contributor\'s id.']
    },
    content: {
        type: String,
        required: [true, 'We need some content!'],
        trim: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Work',
        required: [true, 'Please provide the work\'s id.'],
    },
    originalAuthor: {
        type: String,
        required: [true, 'Please provide the author\'s name']
    },
    },
    {timestamps: true}
)

export default mongoose.model('Contribution', ContributionSchema)
