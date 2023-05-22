import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/buttonCard.css";

const ButtonCard = () => {
  return (
    <div className="container">
      <div className="row">
        <Link
          to="/declarationPqa"
          className="col-6 mx-auto my-5 cool_btn1 green text-decoration-none"
        >
          <h1 className="pt-4">PQA</h1>
        </Link>
        <div
          type="button"
          className="col-6 mx-auto my-5 cool_btn1 teal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <h1 className="pt-4">AT</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-4 my-3 mx-auto bg-danger cool_btn1 blue">
          <h1 className="size pt-4">MES</h1>
          <h1 className="size color pt-4">ACTIONS</h1>
        </div>

        <div className="col-6 mx-auto my-2 mt-5 cool_btn1 yellow">
          <h1 className="size color  pt-4">PLAN</h1>
          <h1 className="size color pt-4">D'ACTION AT</h1>
        </div>

        <div className="col-6 col-md-4 my-3 mx-auto cool_btn1 grey">
          <Link
            to="/mesStats"
            className="col-6 mx-auto my-5 cool_btn1 green text-decoration-none"
          >
            <h1 className="size pt-4">MES</h1>
            <h1 className="size color pt-4">STATISTIQUES</h1>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-4 my-5 mx-auto cool_btn1 red">
          <h1 className="size pt-4">CREER</h1>
          <h1 className="size color pt-4">PLAN D'ACTION</h1>
        </div>

        <div className="col-6 mx-auto my-2 cool_btn1 maron">
          <h1 className="size pt-4">PLAN</h1>
          <h1 className="size color pt-4">D'ACTION PQA</h1>
        </div>

        <div className="col-6 col-md-4 my-5 mx-auto cool_btn1 orange">
          <h1 className="size pt-4">MES</h1>
          <h1 className="size color pt-4">RAPPORTS</h1>
        </div>
      </div>

      <div className="row">
        <Link
          to="/statistique"
          className="col-6 mx-auto cool_btn1 white text-decoration-none  buttonCardMobile"
        >
          <h1 className="size color pt-4">STATISTIQUES</h1>
        </Link>

        <Link
          to="/action"
          className="col-6 mx-auto cool_btn1 black text-decoration-none"
        >
          <h1 className="size pt-4">ACTIONS</h1>
          <h1 className="size color pt-4">EN COURS</h1>
        </Link>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content borderModal">
            <h2 className="text-center mt-3">ACCIDENT</h2>
            <div className="modal-body mx-auto">
              <Button
                variant="success"
                className="mb-2 buttonCard"
                onClick={() => {
                  window.location.href = "/declarationAccidentInterne";
                }}
              >
                TRAVAIL
              </Button>
              <Button
                variant="success"
                className="mb-2 buttonCard"
                onClick={() => {
                  window.location.href = "/declarationAccidentExterne";
                }}
              >
                TRAJET
              </Button>
            </div>
            <div className="modal-footer button-footer mx-auto">
              <button
                type="button"
                className="btn btn-danger buttonCard"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
