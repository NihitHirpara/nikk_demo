import React from "react";
import styled from "styled-components";
import { AiOutlinePlus ,AiOutlineUser,AiOutlineFolderOpen,AiOutlineSetting } from "react-icons/ai";
import { GrDocumentUpload } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

const NavWrapper = styled.div`
  .main {
    position: absolute;
    width: 108px;
    height: 100%;
    left: -23px;
    top: -2px;
    background-color: #ffffff;
    border: 1px solid #ececec;
  }
  .logo {
    position: absolute;
    width: 100%;
    height: 71px;
    left: 0px;
    top: 0px;
    background: #29b712;

    h3 {
      margin: 22px 0px 0px 38px;
      color: #ffffff;
    }
  }
  .content {
    position: absolute;
    width: 43px;
    height: 704px;
    left: 25px;
    top: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .content:hover{
    cursor: pointer;
  }
  .navigation {
    position: relative;
    width: 23px;
    height: 0px;
    left: 24px;
    top: 10px;
    

    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 800;
      font-size: 13px;
      line-height: 10px;
      text-align: center;
      margin-bottom:2px;
      margin-left:-8px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Drawer = () => {
  return (
    <>
      <NavWrapper>
        <div className="main">
          <div className="logo">
            <h3>NIkk</h3>
          </div>
          <div className="content">
          <section className="navigation">
             <AiOutlinePlus style={{fontSize:"25px" }}/>
            <p style={{marginLeft:"-2px" ,marginTop:"10px"}}>NEW</p>
            </section>
            <section className="navigation">
              <AiOutlineUser style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>PATIENT</p>
            </section>
            <section className="navigation">
              <AiOutlineFolderOpen style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>FOLDER</p>
            </section>
            <section className="navigation">
              <GrDocumentUpload style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>UPLOAD</p>
            </section>
            <section className="navigation">
              <HiOutlineDocumentReport style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>REPORT</p>
            </section>
            <section className="navigation">
              <AiOutlineSetting style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>SETTING</p>
            </section>
            <section className="navigation">
              <FiLogOut style={{fontSize:"25px"}}/>
            <p style={{marginTop:"10px"}}>LOGOUT</p>
            </section>
          </div>
        </div>
      </NavWrapper>
    </>
  );
};

export default Drawer;
