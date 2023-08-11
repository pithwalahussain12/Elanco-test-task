import axios from "axios";

export default axios.create({
    baseURL: "https://engineering-task.elancoapps.com/api",
    headers: {
        "Content-type": "application/json"
    }
});