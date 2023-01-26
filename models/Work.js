import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title.'],
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
        trim: true,
    },
    contributions: {
        type: Number,
        required: [true, 'How many contributions does your work have?'],
        trim: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide an author.'],
    },
    complete: {
        type: Boolean,
        default: false
    },
    },
    {timestamps: true}
)

export default mongoose.model('Work', WorkSchema);