import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ details }) => {
  return (
    <>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div className="col">
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                {details.planName}
              </h5>
              <h6 className="card-price text-center">
                ${details.price}
                <span className="period">/month</span>
              </h6>
              <hr />
              <ul className="fa-ul">
                {details.features.map((feature) => {  
                  return (
                    <li className={feature.enable ? "" : "text-muted"}>
                      <span className="fa-li">
                        {feature.enable ? (
                          <FontAwesomeIcon icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} />
                        )}
                      </span>
                      {feature.name}
                    </li>
                  );
                })}
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
