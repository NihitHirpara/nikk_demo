import React from "react";
import styled from "styled-components";
import { TbNotes } from "react-icons/tb";

const HomeWrapper = styled.div`
  .home_main {
    margin: 10px 30px 50px 30px;
    width: 766px;
  }
  .info {
    display: flex;
    margin-top: 23px;
    margin-left: 25px;
  }
  .info_inside {
    width: 260px;
    margin-bottom: 29px;
    h3 {
      font-size: 13px;
      color: #6b6b6b;
      font-weight: 400;
      margin-bottom: 6px;
      line-height: 17px;
    }

    p {
      font-size: 14px;
      color: #242831;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 18px;
      margin-right: 43px;
    }
  }
  .upcoming {
    width: 670px;
    height: 45px;
    margin-top: 48px;
    border: 1px solid #f8f8f8;
    border-radius: 5px;
    background: #f8f8f8;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .upcoming_in {
    width: 203px;
    height: 33px;
    text-align: center;
    p {
      margin: 8px 28px 8px 28px;
      font-size: 12px;
      width: 147px;
      color: #4469ba;
      font-weight: 500;
      height: 17px;
    }
  }
  .root {
    width: 990px;
    height: 310px;
    background: #f8f8f8;
    border-radius: 10px;
    margin-top: 17px;
  }
  .r_main {
    display: flex;
    height: 67px;
    align-items: center;
  }
  .canal {
    color: #242831;
    font-size: 15px;
    font-weight: 400;
    margin: 22px 615px 23px 28px;
  }
  .show {
    width: 170px;
    height: 33px;
    background: #ffffff;
    border-radius: 5px;
    p {
      width: 150px;
      font-size: 12px;
      margin: 8px 10px 8px 16px;
      color: #6b6b6b;
    }
  }
  .treatment {
    width: 100vp;
    height: 86px;
    background: #ffffff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    margin: 10px 27px 0px 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .treatment_t {
    width: 100vp;
    height: 86px;
    background: #ffffff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    margin: 15px 27px 29px 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .nov {
    font-size: 24px;
    font-weight: 700;
    color: #242831;
  }
  .time {
    font-size: 12px;
    font-weight: 400;
    color: #6b6b6b;
    margin-top: 3px;
  }
  .arrow {
    opacity: 0.5;
    color: #6b6b6b;
    font-size: 45px;
    /* margin: 15px -158px 28px -158px; */
    margin-top: -8px;
  }

  .access {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 26px -132px 26px 0px; */
  }
  .tree {
    font-size: 12px;
    font-weight: 400;
    color: #6b6b6b;
  }
  .open {
    font-size: 16px;
    font-weight: 400;
    color: #242831;
    margin-top: 1px;
  }
  .dentist {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 85px;
  }
`;

const Information = () => {
  return (
    <HomeWrapper>
      <div className="home_main">
        <div className="info">
          <section>
            <div className="info_inside">
              <h3>Gender</h3>
              <p>Female</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
            <div className="info_inside">
              <h3>Street Address</h3>
              <p>JL. Diponegoro No. 21</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
          </section>
          <section>
            <div className="info_inside">
              <h3>Birthday</h3>
              <p>Feb 24th, 1997</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
            <div className="info_inside">
              <h3>City</h3>
              <p> Cilacap</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
          </section>
          <section>
            <div className="info_inside">
              <h3>Phone Number</h3>
              <p>(239) 555 -0108</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
            <div className="info_inside">
              <h3>Zip Code</h3>
              <p>655849</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
          </section>
          <section>
            <div className="info_inside">
              <h3>Registered Date</h3>
              <p>Feb 24th, 1997</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
            <div className="info_inside">
              <h3>Member Status</h3>
              <p>Active Member</p>
              <div
                style={{
                  borderBottom: "1px solid #6B6B6B",
                  opacity: "0.2",
                  width: "130px",
                }}
              ></div>
            </div>
          </section>
        </div>
        <div className="upcoming">
          <div className="upcoming_in" style={{ background: "#FFFFFF" }}>
            <p>Upcoming Appointments</p>
          </div>
          <div className="upcoming_in">
            <p style={{ color: "#6B6B6B" }}>Past Appointments</p>
          </div>
          <div className="upcoming_in">
            <p style={{ color: "#6B6B6B" }}>Medical Records</p>
          </div>
        </div>
        <div className="root">
          <div className="r_main">
            <p className="canal">Root Canal Treatment</p>
            <div className="show">
              <p>Show Previous Treatments</p>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #6B6B6B",
              opacity: "0.2",
              marginBottom: "19px",
            }}
          ></div>
          <div className="treatment">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "23px",
              }}
            >
              <p className="nov">26 Nov ‘19</p>
              <p className="time">09.00 - 10.00</p>
            </div>
            <p className="arrow">|</p>
            <div
              className="access"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p className="tree">Treatment</p>
              <p className="open">Open Access</p>
            </div>
            <p className="arrow">|</p>
            <div className="dentist">
              <div>
                <p style={{color:'#6B6B6B'}}>Dentist</p>
                <p>Drg. Adam H.</p>
              </div>
              <div>
                <p style={{color:'#6B6B6B'}}>Nurse</p>
                <p>Jessicamila</p>
              </div>
              <div style={{ display: "flex", color: "#3156C8" ,gridArea: "unset",
                  marginTop: "15px",}}>
                <TbNotes />
                <p style={{fontSize:'12px',fontWeight:'400',textAlign:"center",marginLeft:'4px'}}>Note</p>
              </div>
            </div>
          </div>
          <div className="treatment_t">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "23px",
              }}
            >
              <p className="nov">12 Nov ‘19</p>
              <p className="time">09.00 - 10.00</p>
            </div>
            <p className="arrow">|</p>
            <div
              className="access"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p className="tree">Treatment</p>
              <p className="open">Root Canal</p>
            </div>
            <p
              className="arrow"
              style={{ marginLeft: "15px", marginBottom: "5px" }}
            >
              |
            </p>
            <div className="dentist">
              <div>
                <p style={{color:'#6B6B6B'}}>Dentist</p>
                <p>Drg. Adam H.</p>
              </div>
              <div>
                <p style={{color:'#6B6B6B'}}>Nurse</p>
                <p>Jessicamila</p>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#3156C8",
                  gridArea: "unset",
                  marginTop: "15px",
                }}
              >
                <TbNotes />
                <p style={{fontSize:'12px',fontWeight:'400',textAlign:"center",marginLeft:'4px'}}>Note</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Information;
