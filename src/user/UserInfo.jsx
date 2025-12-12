import React, { use } from 'react';

import style from './UserInfo.module.css';
import pic from '../assets/profile.png';

const UserInfo = ({userInfo}) => {
  return (
    <div className="row mb-4">

      {/* Columna izquierda */}
      <div className={`col-md-3 py-3 card ${style.textcenter}`}>
        <img
          src={pic}
          alt="User Profile"
          className={`img-fluid rounded-circle mb-3 mx-auto ${style.profileImage}`}
        />

        <div>
          <h4>{`${userInfo.first_name} ${userInfo.last_name}`}</h4>
          <p className="text-muted">{userInfo.email}</p>

          <button 
            className="btn mt-2" 
            style={{ backgroundColor: '#6050DC', color: 'white' }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="col-md-9">
        <div className="card">

          {/* Encabezado */}
          <div 
            className="card-header"
            style={{ backgroundColor: '#6050DC', color: 'white' }}
          >
            <h5>Account Overview</h5>
          </div>

          {/* Cuerpo */}
          <div className="card-body">
            <div className="row">

              {/* Col 1 */}
              <div className="col-md-6">
                
                <p><strong>Full Name:</strong> {`${userInfo.first_name} ${userInfo.last_name}`}</p>
                <p><strong>Email:</strong> {userInfo.email}</p>
                <p><strong>Phone:</strong> {userInfo.phone}</p>
              </div>

              {/* Col 2 */}
              <div className="col-md-6">
                <p><strong>Username:</strong> {userInfo.username}</p>
                <p><strong>City:</strong> {userInfo.city}</p>
                <p><strong>Country:</strong> {userInfo.country}</p>
                
              </div>

            </div>
          </div>
          {/* Fin del card-body */}

        </div>
        {/* Fin del card */}
      </div>
      {/* Fin col-md-9 */}

    </div>
  );
};

export default UserInfo;
