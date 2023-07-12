import axios from 'axios';

const URL = 'http://20.244.56.144/train/'; // ADD THE BASE URL HERE

const API = axios.create({
  baseURL: URL
});

const getToken = async() =>{
  let {data} = await axios.post("http://20.244.56.144/train/auth", {
    companyName: "Hyderabad Trains",
    ownerName: "Kumar Sahani",
    rollNo: "20BK1A6632",
    ownerEmail: "kumarsahani1311@gmail.com",
    "clientID": "ed9ce864-aa94-4fc6-a6dc-42e374967131",
    "clientSecret": "ezGLTqDXREDnTAfU"
  })
  return data.access_token
}

// console.log(await getToken())

API.interceptors.request.use(async(req) => {
  const jwtToken = await getToken()
  req.headers.authorization = `Bearer ${jwtToken}`;
  return req;
});

export const getAllTrains = () => API.get('/trains');
export const getSingleTrain = (id) => API.get(`/trains/${id}`);
