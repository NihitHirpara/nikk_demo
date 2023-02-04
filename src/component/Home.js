import React from 'react';
import User from './User';
import Information from './Information';

const Home = () => {
  return (
    <div style={{width:"auto",margin:'20px 40px 0px 120px'}}>
        <div style={{display:"flex"}}>
            <User/>
            <Information/>
        </div>
    </div>
  );
}

export default Home;
