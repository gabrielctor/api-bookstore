import mongoose from 'mongoose';

const publisherSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    local: { type: String, required: true },
    website: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const publishers = mongoose.model('publishers', publisherSchema);

export default publishers;
