import "./styles.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App(props) {
  const [pin, setPin] = useState();
  const [date, setDate] = useState();
  const [data, setData] = useState();

  const today = new Date();
  // today.setDate(today.getDate() + 1);
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'numeric', year: 'numeric'
  }).replaceAll('/', '-');

  console.log(formattedDate);
  useEffect(() => {
    props.value && axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.value}&date=${formattedDate}`)
      .then(res => {
        const persons = res.data;
        setData(persons.sessions[0])
      })

  }, [props.value])



  return (
    <div className="App" >
      <h2>Vaccine Availibilty For Today</h2>
      <div>
        <table id="customers">
          <tr>
            <th>Center Name</th>
            <th>Date</th>
            <th>Vaccine Type</th>
            <th>Age Limit</th>
            <th>Availibilty</th>
            <th>Available Dose 1</th>
            <th>Available Dose 2</th>
          </tr>

          {data ?
            <tr>
              <td>{data.name}, {data.address}, {data.block_name}</td>
              <td>{data.date}</td>
              <td> {data.vaccine}</td>
              <td>{data.min_age_limit}</td>
              <td> {data.available_capacity}</td>
              <td>{data.available_capacity_dose1}</td>
              <td>{data.available_capacity_dose2}</td>
            </tr>
            :
              <tr class="line">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          }

        </table>
      </div>
    </div>
  );
}
