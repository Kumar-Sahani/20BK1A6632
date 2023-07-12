import React, {useState, useEffect} from 'react';
import { getSingleTrain } from '../../api/api';
import { useParams } from 'react-router-dom';

const SingleTrain = () => {
  const [train, setTrain] = useState({});
  const {id} = useParams()
  useEffect(()=>{
    const getTrains = async() =>{
      try {
        const {data} = await getSingleTrain(id)
      // data.departure = Object.values(train.departureTime).join(":")
      console.log(data.departureTime)
      if(data.trainName)
      setTrain(data)
      console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getTrains()
  },[])
  return <div>
    <h1>{train.trainName}</h1>
    <h3>Train no: {train.trainNumber}</h3>
    <h3>Departure: {`${train.departureTime?.Hours} : ${train.departureTime?.Minutes} : ${train.departureTime?.Seconds}`}</h3>
    <h3>Sleeper price: {train.price?.sleeper}</h3>
    <h3>AC price: {train.price?.AC}</h3>
  </div>;
};

export default SingleTrain;
