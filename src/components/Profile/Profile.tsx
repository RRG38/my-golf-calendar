import React from 'react';
import './profile.css';

const Profile = () => {
    return  (
        <>
        <h1> My Profile Information </h1>
        <section className='profile-section'>
            <div className='profile-detail-row'>
                <label htmlFor='phone-number'><h3>Phone Number: </h3></label><input />
            </div>
            
            <div className='profile-detail-row'>
                <label htmlFor='username'><h3>Username: </h3></label><input /><button>EDIT</button>
            </div>
            
            <div className='profile-detail-row'>
                <label htmlFor='password'><h3>Password: </h3></label><input /><button>EDIT</button>
            </div>
            
            <div className='profile-detail-row'>
                <label htmlFor='first-name'><h3>First Name: </h3></label><input /><button>EDIT</button>
            </div>

            <div className='profile-detail-row'>
                <label htmlFor='last-name'><h3>Last Name: </h3></label><input /><button>EDIT</button>
            </div>
        </section>
        </>
    )
}

export default Profile;