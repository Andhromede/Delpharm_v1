import React, { useState } from "react";
import "../assets/css/pqasd.css";
import { ProgressBar } from "react-bootstrap";
import { IoIosSave, IoIosAddCircle } from "react-icons/io";
import { TiWarningOutline } from "react-icons/ti";
import InputForm from "../components/InputForm";
import TextAreaForm from "./TextAreaForm";

const Pqa = () => {
  let [currentSlide, setCurrentSlide] = useState(1);
  let [nbr, setNbr] = useState(0);

  const duplicateDiv = (evt) => {
    evt.preventDefault();

    if (nbr > 3) {
      return;
    }
    let originalInput = document.getElementById("whyInput").cloneNode(true);
    originalInput.classList.remove("d-none");
    originalInput.place = "whyInput" + ++nbr;
    let inputContainer = document.getElementById("whyInputContainer");
    inputContainer.appendChild(originalInput);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO fonction de soumission de formulaire
  };

  //FONCTION SLIDE PRECEDENTE
  const previousSlide = (evt) => {
    evt.preventDefault();

    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  //FONCTION SLIDE SUIVANTE
  const nextSlide = (evt) => {
    evt.preventDefault();

    if (currentSlide <= 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <div className="text-center mb-3 body container">
      <form
        className="container-fluid my-5"
        name="section1"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {currentSlide === 1 && (
          <div>
            <h1 className="text-light mb-3 ">OBSERVATION</h1>
            <div className="progressBar ">
              <ProgressBar
                animated
                className="w-50 mx-auto my-5"
                now={20}
                label={`1 / 5`}
                striped
                variant="danger"
              />
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div>
            <h1 className="text-light mb-3 ">ACTIONS IMMEDIATES</h1>
            <div className="progressBar ">
              <ProgressBar
                animated
                className="w-50 mx-auto my-5"
                now={40}
                label={`2 / 5`}
                striped
                variant="danger"
              />
            </div>
          </div>
        )}
        {currentSlide === 3 && (
          <div>
            <h1 className="text-light mb-3 ">ANALYSE</h1>
            <div className="progressBar ">
              <ProgressBar
                animated
                className="w-50 mx-auto my-5"
                now={60}
                label={`3 / 5`}
                striped
                variant="warning"
              />
            </div>
          </div>
        )}
        <div className="row">
          {/* BOUTON PRECEDENT */}
          <div className="col-10 col-sm-2 mx-auto my-3 my-auto buttonForm">
            {currentSlide > 1 && (
              <button
                className="btn bg-danger text-light btn-block mb-4 mx-auto col-8 col-sm-3 button2 bounce-in-left"
                title="Sauvegarde automatique"
                onClick={previousSlide}
              >
                Précédent <IoIosSave />
              </button>
            )}
          </div>
          {currentSlide === 1 && (
            <div className="col-12 col-sm-8 mx-auto">
              <div
                className="px-5 py-5 px-md-5 bg-glass row mx-auto"
                id="radius1"
              >
                <InputForm
                  classDiv="form-outline mb-4 col-12 col-md-5 mx-auto"
                  classInput="form-control inputForm mx-auto"
                  classLabel="form-label fw-bold txtVert"
                  intitule="Date d'observation"
                  name="date_rapport"
                  id="date_rapport"
                  type="date"
                />
                <InputForm
                  classDiv="form-outline mb-4 col-12 col-md-5 mx-auto"
                  classInput="form-control inputForm mx-auto"
                  classLabel="form-label fw-bold txtVert"
                  intitule="Lieu d'observation"
                  name="lieu"
                  id="lieu"
                  type="text"
                />
                <h4 className="mx-auto">Redacteur du PQA/SD :</h4>
                <InputForm
                  classDiv="form-outline mb-4 col-12 col-md-5 mx-auto"
                  classInput="form-control inputForm mx-auto"
                  classLabel="form-label fw-bold txtVert"
                  intitule="Nom"
                  name="nom"
                  id="nom"
                  type="text"
                />
                <InputForm
                  classDiv="form-outline mb-4 col-12 col-md-5 mx-auto"
                  classInput="form-control inputForm mx-auto"
                  classLabel="form-label fw-bold txtVert"
                  intitule="Prenom"
                  name="prenom"
                  id="prenom"
                  type="text"
                />
                <TextAreaForm
                  classDiv="form-outline col-12 col-md-8  pt-3 pb-5 text-start col-xxl-9 mx-auto"
                  classArea="form-control textArea1 mx-auto"
                  classLabel="form-label h5 fw-bold txtVert"
                  intitule="Quelle est la situation dangereuse ?(QQOQCP) "
                  placeholder="Observation (QQOQCP) :"
                  name="comment"
                  nbrRows="4"
                />
              </div>
            </div>
          )}
          {currentSlide === 2 && (
            <div className="col-12 col-sm-8 bg-glass mx-auto" id="radius2">
            <div
              className="px-5 py-5 px-md-5 row mx-auto"
            >
              <div className="col-12">
                <div className="iconsForm">
                  <TiWarningOutline />
                </div>
                <h6 className=" warning">
                  <div>
                    <strong>1</strong>. En cas d'observation d'un comportement
                    dangereux,
                    <br />
                    <br />
                    l'action immédiate consiste à discuter avec la personne pour
                    obtenir un changement d'attitude.
                    <br />
                    <br />
                  </div>
                </h6>
                <span className=" warning">
                  <div>
                    <strong>2</strong>. Si danger imminent, appeler
                    immédiatement le 8300. Prévenez votre hiérarchie.
                  </div>
                </span>
              </div>
              <TextAreaForm
                classDiv="form-outline pb-5 mt-5 text-start col-12 col-md-10 col-xxl-8 mx-auto"
                classArea="form-control textArea1 mx-auto"
                classLabel="form-label h5 fw-bold txtVert"
                intitule="Actions immédiates mises en oeuvre"
                name="action_immédiate"
                nbrRows="4"
              />
            </div>
            </div>
          )}
          {currentSlide === 3 && (
            <div className="col-12 col-sm-8 mx-auto">
            <div
              className="px-5 py-5 bg-glass mx-auto row mx-auto"
              id="radius3"
            >
              <h3>Recherche des causes (5 pourquoi)</h3>
              <div className="col-12">
                <div id="whyInput" className="row d-none">
                  <InputForm
                    classDiv="form-outline mb-4 col-12 col-md-6 col-xxl-8 mx-auto"
                    classInput="form-control inputForm"
                    classLabel="form-label fw-bold txtVert"
                    name="pourquoi"
                    id="pourquoi"
                    type="text"
                    placeholder="Pourquoi"
                  />
                </div>
              </div>
              <div className="row" id="whyInputContainer">
                <div className="row">
                  <InputForm
                    classDiv="form-outline mb-4 col-12 col-md-6 col-xxl-8 mx-auto"
                    classInput="form-control inputForm"
                    classLabel="form-label fw-bold txtVert"
                    intitule="Pourquoi cela arrive-t-il ?"
                    name="pourquoi"
                    id="pourquoi"
                    type="text"
                    placeholder="Pourquoi"
                  />
                </div>
              </div>
              <div className="row">
                <button
                  className="btn btn-success button col-1 col-md-12 mx-auto"
                  onClick={duplicateDiv}
                  title="Ajouter une cause"
                >
                  <IoIosAddCircle />
                </button>
              </div>
            </div>
            </div>
          )}
          {/* BOUTON SUIVANT */}
          {currentSlide < 3 && (
            <div className="col-10 col-sm-2 mx-auto my-auto my-3 buttonForm2">
              <button
                className="btn bg-warning text-light btn-block mb-4 mx-auto col-8 col-sm-3 button2 bounce-in-right text-dark"
                title="Sauvegarde automatique"
                onClick={nextSlide}
              >
                Suivant <IoIosSave />
              </button>
            </div>
          )}
          {currentSlide === 3 && (
            <div className="col-10 col-sm-2 mx-auto my-auto my-3 buttonForm2">
              <button
                className="btn bg-warning text-light btn-block mb-4 mx-auto col-8 col-sm-3 button2 bounce-in-right"
                title="Sauvegarde automatique"
                onClick={nextSlide}
              >
                Valider <IoIosSave />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Pqa;
