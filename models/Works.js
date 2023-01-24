import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title.'],
        maxLength: 40,
        trim: true,
    },
    genre: {
        type: String,
        required: [true, 'Please provide a genre.'],
        maxLength: 30,
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'Provide your work\'s first entry.'],
        maxLength: 40,
        trim: true,
    },
    contributions: {
        type: Number,
        required: [true, 'How many contributions does your work have?'],
        maxLength: 40,
        trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide an auther.'],
    },
    complete: {
        type: Boolean,
        default: false
    },
    },
    {timestamps: true}
)

export default mongoose.model('Work', WorkSchema);