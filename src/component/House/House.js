import React from "react";
import { connect } from "react-redux";
import { deleteHouse } from "./../../ducks/user";

function House(props) {
  return (
    <div className="houses">
    <h3>Home Listings</h3>
      {props.houses.map((house, i) => {
        return (
          <div key={i} className="houseListing flexRow">
            <div className="imgContainer">
              <img src={house.img} alt={house.pname} />
            </div>
            <div className="flexCol address">
              <div><p>Property Name: {house.pname}</p></div>
              <div><p>Address: {house.address}</p></div>
              <div><p>City: {house.city}</p></div>
            <div><p>State: {house.state}</p></div>
              <div><p>Zip: {house.zip}</p></div>
            </div>
            <div className="flexCol money">
            <p>
              Monthly Mortgage: {house.mortgage}</p>
              <p>Desired Rent: {house.rent}</p>
            </div>
            <div className='button'>
              <button
                onClick={async () => {
                  await props.deleteHouse(house.id);
                  props.updateHouses();
                }}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const dispatch = () => {
  return {
    deleteHouse
  };
};
export default connect(
  null,
  dispatch()
)(House);
