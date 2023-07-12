import React, {useState, useEffect} from 'react';
import * as API from '../../api/api.js';
import { useNavigate } from 'react-router-dom';

const AllTrains = () => {
  const navigate = useNavigate()
  const [allTrainsData, setAllTrainsData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const {data} = await API.getAllTrains();
      console.log(data)
      if(data && data.length)
      setAllTrainsData(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchTrainData();
  }, []);

  return <div>
    <table>
      <thead>
        <td>Name</td>
        <td>Number</td>
        <td>Departure</td>
        <td>Price for AC</td>
        <td>Price for Sleeper</td>
      </thead>
      <tbody>
        {
          allTrainsData.map((item, index) => <tr key={index} style={{cursor: "pointer"}} onClick={()=>navigate(`/single-trains/${item.trainNumber}`)}>
            <td>{item.trainName}</td>
            <td>{item.trainNumber}</td>
            <td>{Object.values(item.departureTime).join(":")}</td>
            <td>{item.price.AC}</td>
            <td>{item.price.sleeper}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>;
};

export default AllTrains;
