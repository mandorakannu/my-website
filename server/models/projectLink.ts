import mongoose, {Schema} from "mongoose";
const projectLinks = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
});

export default mongoose.models.projectLinks || mongoose.model("link", projectLinks);