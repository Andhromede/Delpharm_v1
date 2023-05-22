import { React, useEffect, useState } from 'react';
import InputForm from '../InputForm';
import TextAreaForm from '../TextAreaForm';
import { FaTrashAlt } from 'react-icons/fa';
import SelectForm from '../SelectForm';


const FormAccident7 = (props) => {
    const { page } = props;
    let [nbr, setNbr] = useState(0);
    const [tableauPilotes, setTableauPilote] = useState([]);
    const [tableauPorteur, setTableauPorteur] = useState([]);


    /********** CLONAGE D'UN ELEMENT **********/
    const duplicateDiv = (evt) => {
        evt.preventDefault();

        if (nbr >= 4) {
            return;
        }

        // clone un élément
        let originalDiv = document.getElementById('divActions').cloneNode(true);
        originalDiv.classList.remove('d-none');
        originalDiv.id = "divActions" + ++nbr;

        // écouteur d'evenement sur les boutons delete
        originalDiv.querySelector('.trashButton').addEventListener('click', deleteDiv);

        //affiche la div clonée
        let container = document.getElementById('divActionsContainer');
        container.appendChild(originalDiv);
    }


    /********** SUPPRESSION DE L'ELEMENT VIA SON BOUTON **********/
    const deleteDiv = (evt) => {
        evt.preventDefault();
        const container = evt.currentTarget.closest('.row');
        container.remove();
    }


    /********** format Json des Id pour les fetch **********/
    let idPilote = JSON.stringify({ "idRole": 3 });
    let idPorteur = JSON.stringify({ "idRole": 4 });

    useEffect(() => {
        fetch(`https://localhost:7027/api/Utilisateur/findUserByRole`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: idPilote
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauPilote(data);
            }).catch(console.log());
            
            fetch(`https://localhost:7027/api/Utilisateur/findUserByRole`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: idPorteur
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauPorteur(data);
            }).catch(console.log());
        }, []);


        return (
            <div className="col-12 col-sm-6 px-4 px-md-5 circle5 bg-glass mb-3 mx-auto mt-3">
                <div className="row text-center mb-4 ms-3 pt-5">
                    <div className="row mt-4">

                        {(page === "externe") &&
                            <div className="row">
                                <TextAreaForm classDiv="form-outline col-9 pb-5 text-start ms-3" classArea="form-control" classLabel="form-label h5 fw-bold txtVert" intitule="Circonstance de l'accident" name="circonstance" nbrRows="4" />
                            </div>
                        }

                        <div className="row">
                            <TextAreaForm classDiv="form-outline mt-3 col-9 pb-5 text-start ms-3" classArea="form-control" classLabel="form-label h5 fw-bold txtVert" intitule="Remarques" name="remarques" nbrRows="4" />
                        </div>

                        {(page === "externe") &&
                            <div className="row">
                                <TextAreaForm classDiv="form-outline mt-3 mb-5 col-9 pb-5 text-start ms-3" classArea="form-control" classLabel="form-label h5 fw-bold txtVert" intitule="Réserves" name="remarques" nbrRows="4" />
                            </div>
                        }

                        {(page === "interne") &&
                            <>
                                {/* DIV A CLONER */}
                                <div className="d-none row" id="divActions">
                                    <hr className="w-75 my-4"/>
                                    <TextAreaForm classDiv="form-outline col-9 pb-1 text-start ms-3" classArea="form-control" classLabel="form-label h5 fw-bold txtVert" intitule="Action supplémentaire" name="actions" nbrRows="4" />
                                    <button className="btn btn-sm bg-danger text-light col-1 trashButton my-auto" id="trashButton" name="divLesionsContainer" onClick={deleteDiv}><FaTrashAlt /></button>
                                    <SelectForm classDiv="form-outline col-5 h5" classLabel="form-label fw-bold txtVert" intitule="Pilote" classSelect="form-select" id="pilotes" name="pilotes" aria="Default select example" tableau={tableauPilotes} />
                                    <SelectForm classDiv="form-outline col-5 h5" classLabel="form-label fw-bold txtVert" intitule="Porteur" classSelect="form-select" id="pilotes" name="pilotes" aria="Default select example" tableau={tableauPorteur} />
                                </div>

                                {/* DIV A AFFICHER */}
                                <div className="row" id="divActionsContainer">
                                    <TextAreaForm classDiv="form-outline col-9 pb-1 text-start ms-3" classArea="form-control" classLabel="form-label h5 fw-bold txtVert" intitule="Actions immédiates mises en oeuvre" name="actions" nbrRows="4" />
                                    <SelectForm classDiv="form-outline col-5 h5 my-0" classLabel="form-label fw-bold txtVert" intitule="Pilote" classSelect="form-select" id="pilotes" name="pilotes" aria="Default select example" tableau={tableauPilotes} />
                                    <SelectForm classDiv="form-outline col-5 h5" classLabel="form-label fw-bold txtVert" intitule="Porteur" classSelect="form-select" id="pilotes" name="pilotes" aria="Default select example" tableau={tableauPorteur} />
                                </div>

                                {/* BOUTON AJOUTER */}
                                <button className="btn btn-sm bg-success text-light ms-4 col-3" onClick={duplicateDiv}>Ajouter une action</button>

                                <InputForm classDiv="ps-5 text-start form-check col-11 my-5 pb-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Déclenchement d'une RdP" name="rdp" id="durdp" type="checkbox" />
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }

export default FormAccident7;