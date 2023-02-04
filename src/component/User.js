import React from "react";
import styled from "styled-components";
import { FiFileText } from "react-icons/fi";

const Wrapper = styled.div`
  .files {
    margin: 50px 0px 29px 0px;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  }
  .text {
    display: flex;
    margin:0px 0px 8px 0px;
    background: #f9f9f9;
    width: 300px;
    height: 49px;
    align-items: center;
   
  }
`;

const User = () => {
  return (
    <Wrapper>
      <div className="user">
        <div
          style={{
            width: "300px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
         >
          <img
            src="usericon.jpg"
            alt=""
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "50%",
              margin: "30px 0px 5px 102px",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "33px",
              color: "#242831",
            }}
          >
            Diane Cooper
          </p>
          <p
            style={{ textAlign: "center", fontSize: "12px", color: "#6B6B6B" }}
          >
            diane.cooper@example.com
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "15px 0px 3px 10px",
            }}
          >
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0px",
              }}
            >
              <p style={{ textAlign: "center", fontSize: "20px" }}>15</p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#6B6B6B",
                }}
              >
                Past
              </p>
            </section>
            <p
              style={{
                borderRight: "1px solid #6B6B6B",
                height: "34px",
                margin: "10px 0px 0px 0px",
                opacity: "50%",
              }}
            ></p>
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0px",
              }}
            >
              <p style={{ textAlign: "center", fontSize: "20px" }}>02</p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#6B6B6B",
                }}
              >
                Upcoming
              </p>
            </section>
          </div>
          <section
            style={{
              width: "300px",
              height: "40px",
              border: "1px solid #ececec",
              borderRadius: "8px",
              margin: "40px 0px 0px 0px",
            }}
          >
            <p
              style={{
                textAlign: "center",
                marginTop: "8px",
                fontSize: "14px",
                fontWeight:'500',
                color: "#242831",
              }}
            >
              Send Message
            </p>
          </section>
          <p className="files">Files / Documents</p>
          <section className="text">
            <FiFileText style={{margin:'17px 16px 16px 20px',fontSize:'25px'}} />
            <p>Check Up Results.pdf</p>
          </section>
          <section className="text">
            <FiFileText style={{margin:'17px 16px 16px 20px',fontSize:'25px'}} />
            <p>Check Up Results.pdf</p>
          </section>
          <section className="text">
            <FiFileText style={{margin:'17px 16px 16px 20px',fontSize:'25px'}} />
            <p>Medical Prescription.pdf</p>
          </section>
          <section className="text">
            <FiFileText style={{margin:'17px 16px 16px 20px',fontSize:'25px'}} />
            <p>Dental X-Ray Result.pdf</p>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default User;
