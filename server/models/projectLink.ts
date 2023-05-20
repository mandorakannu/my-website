import {Schema, model} from "mongoose";
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

const links = model("link", projectLinks);
export default links;