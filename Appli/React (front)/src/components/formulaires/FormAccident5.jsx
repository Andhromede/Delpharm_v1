import { React, useEffect, useState } from 'react';
import InputForm from '../InputForm';
import TextAreaForm from '../TextAreaForm';
import SelectForm from '../SelectForm';
import { FaTrashAlt } from 'react-icons/fa';


const FormAccident5 = (props) => {
    const { page } = props;
    let [nbr, setNbr] = useState(0);
    const [tableauLesion, setTableauLesion] = useState([]);
    const [tableauTraumatisme, setTableauTraumatisme] = useState([]);
    const [tableauCote, setTableauCote] = useState([]);


    /********** RECUPERATION DES DATAS (lésions, traumatismes et côtés) **********/
    useEffect(() => {
        fetch(`https://localhost:7027/api/SiegeLesions`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauLesion(data);
            }).catch(console.log());

        fetch(`https://localhost:7027/api/Traumatismes`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauTraumatisme(data);
            }).catch(console.log());

        fetch(`https://localhost:7027/api/Cotes`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauCote(data);
            }).catch(console.log());
    }, []);


    /********** CLONAGE D'UN ELEMENT **********/
    const duplicateDiv = (evt) => {
        evt.preventDefault();

        if (nbr >= 9) {
            return;
        }

        // clone un élément
        let originalDiv = document.getElementById('divLesions').cloneNode(true);
        originalDiv.classList.remove('d-none');
        originalDiv.id = "divLesions" + ++nbr;

        // écouteur d'evenement sur les boutons delete
        originalDiv.querySelector('.trashButton').addEventListener('click', deleteDiv);

        //affiche la div clonée
        let container = document.getElementById('divLesionsContainer');
        container.appendChild(originalDiv);
    }


    /********** SUPPRESSION DE L'ELEMENT VIA SON BOUTON **********/
    const deleteDiv = (evt) => {
        evt.preventDefault();
        const container = evt.currentTarget.closest('.row');
        container.remove();
    }


    return (
        <div className="col-12 col-sm-6 py-5 px-md-5 circle4 bg-glass my-3">
            <div className="row text-center mb-4 me-3 pt-5 ">
                <div className="row mt-4">
                    <InputForm classDiv="form-outline mb-4 col-9 col-lg-5 h5 ps-5 ms-3" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Date &amp; Heure de l'accident" name="dateAccident" id="dateAccident" type="datetime-local" />
                    <TextAreaForm classDiv="form-outline mb-4 col-10 col-lg-5" classArea="form-control" classLabel="form-label fw-bold txtVert h5" intitule="Lieu de l'accident" name="circonstance" nbrRows="2" />

                    {(page === "interne") &&
                        <TextAreaForm classDiv="form-outline mb-4 col-0 mx-auto" classArea="form-control" classLabel="form-label fw-bold txtVert h5" intitule="Circonstance de l'accident" name="circonstance" nbrRows="3" />
                    }
                    {(page === "externe") &&
                        <TextAreaForm classDiv="form-outline mb-4 col-10 mx-auto" classArea="form-control" classLabel="form-label fw-bold txtVert h5" intitule="Motif, Lieux de déplacement (départ/arrivée)" name="motif" nbrRows="3" />
                    }

                    <hr className="mt-2 mb-4" />

                    <div className="col-12">
                        {/* DIV A CLONER */}
                        <div className="row divclone">
                            <div className="row d-none" id="divLesions">
                                <SelectForm classDiv="form-outline col-4 h5" classLabel="form-label fw-bold txtVert" intitule="Lésion" classSelect="form-select" id="IdSiegeLesion" name="IdSiegeLesion" aria="Default select example" tableau={tableauLesion} />
                                <SelectForm classDiv="form-outline col-4 h5" classLabel="form-label fw-bold txtVert" intitule="Traumatisme" classSelect="form-select" id="IdTraumatisme" name="IdTraumatisme" aria="Default select example" tableau={tableauTraumatisme} />
                                <SelectForm classDiv="form-outline col-3 h5" classLabel="form-label fw-bold txtVert" intitule="Côté" classSelect="form-select" id="IdCote" name="IdCote" aria="Default select example" tableau={tableauCote} />
                                <button className="btn btn-sm bg-danger text-light col-1 trashButton" id="divTrash" name="divLesions" onClick={deleteDiv}><FaTrashAlt /></button>
                            </div>
                        </div>

                        {/* DIV A AFFICHER */}
                        <div className="row divCloneContainer" id="divLesionsContainer">
                            <div className="row">
                                <SelectForm classDiv="form-outline col-4 h5" classLabel="form-label fw-bold txtVert" intitule="Lésion" classSelect="form-select" id="IdSiegeLesion" name="IdSiegeLesion" aria="Default select example" tableau={tableauLesion} />
                                <SelectForm classDiv="form-outline col-4 h5" classLabel="form-label fw-bold txtVert" intitule="Traumatisme" classSelect="form-select" id="IdTraumatisme" name="IdTraumatisme" aria="Default select example" tableau={tableauTraumatisme} />
                                <SelectForm classDiv="form-outline col-3 h5" classLabel="form-label fw-bold txtVert" intitule="Côté" classSelect="form-select" id="IdCote" name="IdCote" aria="Default select example" tableau={tableauCote} />
                            </div>
                        </div>
                    </div>

                    {/* BOUTON AJOUTER */}
                    <button className="btn btn-sm bg-success text-light mx-auto col-4 " onClick={duplicateDiv}>Ajouter</button>
                </div>
            </div>
        </div>
    );
}

export default FormAccident5;