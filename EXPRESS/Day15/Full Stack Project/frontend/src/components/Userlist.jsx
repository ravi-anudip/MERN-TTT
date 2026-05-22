import axios from "axios";
import { useState, useEffect } from "react";

export default function UserList() {

  const [userdata, setUserData] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {

    axios
      .get("http://localhost:8081/getalluserlist")
      .then((response) => {

        console.log(response.data);

        if (response.data.userResult) {
          setUserData(response.data.userResult);
          setMsg('');
        } else {
          setMsg(response.data.msg);
        }

      })
      .catch((error) => {
        console.log(error);
        setMsg("Error while fetching data");
      });

  }, []);

  return (
    <>
      <h1>User list as below</h1>
      <h1>{msg.length > 0 && msg}</h1>
      <table align="center">
        <tr>
          <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Gender</th>
        </tr>
        {userdata.length > 0 && userdata.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.dob}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </table>
    </>
  )
} 




