import React, {useState, useEffect, Fragment} from 'react';

const getUserData = (setUserData, pageNumber) => {
  fetch("https://reqres.in/api/users?page=" + pageNumber, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

  })
  .then((res) => res.json())

  .then((result) => {
    setUserData(result.data);
  });
};

function Profile() {
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getUserData(setUserData, pageNumber);
  }, []);

  useEffect(() => {
    getUserData(setUserData, pageNumber);
  }, [pageNumber]);

  const userInfo = userData.map((user, index) => (
    <tr key={index}>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return(
    <Fragment>
      <div> owo </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
        {userInfo}
        </tbody>

        <button onClick = {() => {setPageNumber(1)}}> Page 1 </button>
        <button onClick = {() => {setPageNumber(2)}}> Page 2 </button>

      </table>

    </Fragment>
  );
}

export default Profile;
