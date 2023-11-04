import axios from "axios";

const BaseURL_ONe = "http://localhost:5000/api/v1/ReadProduct";
const BaseURL = "http://localhost:5000/api/v1/CreateProduct";

// Read Data
export async function ReadRequest(){
    let result = await axios.get(BaseURL_ONe)
    return result.data['data'];
}

// Create Data
export async function createRequest(JSONBody){
    let result = await axios.post(BaseURL, JSONBody)
    return result.data['status'];
}