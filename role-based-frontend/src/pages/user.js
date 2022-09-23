import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Note_API } from "../store/API";


const User = () => {
  const [data, setData] = useState([])
  const access_token = `Token ${sessionStorage.getItem('accessToken')}`

  const fetchData = () => {
    fetch(Note_API, {method: 'get', 
      headers : {
        'Authorization' : access_token,
      },  
      
  })
      .then(response => {
        return response.json()
      })
      .then(data => {
        // localStorage.setItem("dataa",data);
        setData(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])




    return (
    <Container>
      <h2>User here</h2>
      <p>{Note_API}</p>
      <p>AT::  {access_token}</p>
      <div>
      {data.length > 0 && (
        <ul>
          {data.map(item => (
            <div>
              <li>{item.name} | {item.price} | {item.first_image} </li>
              <img style={{width: "200px", height:"200px"}} src={item.first_image} alt="preview image" />
            </div>
          ))}
        </ul>
      )}
    </div>
    </Container>
    );
  };
  
  export default User;