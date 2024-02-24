import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a POST request to fetch user data
        const response = await axios.post('http://localhost:5000/api/getuser', {}, {
          headers: {
            "auth-token": localStorage.getItem('authToken') // Include the authentication token
          }
        });

        // Set the user data received from the server
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
    <Navbar/>
      {/* Website: wwww.codingdung.com */}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Profile</title>
          <link rel="stylesheet" href="style.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="container light-style flex-grow-1 container-p-y">
            <br />
            <br />
            <div className="card">
              <div className="row no-gutters row-bordered row-border-light">
                <div className="col-md-3 pt-0">
                  <div className="list-group list-group-flush account-settings-links">
                    <div style={{ fontSize: 'larger', paddingTop: '10px', paddingLeft: '20px' }}>
                      <h2>
                        <b>
                          P<span className="clr">rofile</span>
                        </b>
                      </h2>
                    </div>
                    <a className="list-group-item list-group-item-action active" data-toggle="list" data-target="#general">
                     General
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content">
                    {/* GENERAL */}
                    <div className="tab-pane fade active show" id="general">
                      <div>
                        <img
                          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
                          className="prof"
                          alt="profile"
                        />
                        <br />
                        <br />
                        <div className="media-body ml-4"></div>
                      </div>
                      <hr className="border-light m-0" />
                      <div className="card-body">
                        <div className="dabba">
                          <label className="form-label" style={{ fontWeight: '700' }}>
                            Phone no.
                          </label>
                          <p>{userData?.phone}</p>
                        </div>
                        <div className="dabba">
                          <label className="form-label" style={{ fontWeight: '700' }}>
                             Username
                          </label>
                          <p>{userData?.username}</p>
                        </div>
                        <div className="dabba">
                          <label className="form-label" style={{ fontWeight: '700' }}>
                            E-mail
                          </label>
                          <p>{userData?.email}</p>
                        </div>
                        <label className="form-label" style={{ fontWeight: '700' }}> Address :</label>
                        <p>{userData?.address}</p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>
    </>
  );
};

export default Profile;
