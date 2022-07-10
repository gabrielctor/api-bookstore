import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
        publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'publishers', required: true},
        genre: {type: String, required: true},
        pages: {type: Number, required: true},
        edition: {type: Number, required: true}
    },
    {
        versionKey: false
    }
)

const books = mongoose.model('books', bookSchema)

export default books