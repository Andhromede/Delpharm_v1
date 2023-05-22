import React from 'react';
import InputForm from '../InputForm';
import SelectAutoComplete from '../SelectAutoComplete';
import SelectForm from '../SelectForm';
import { useState, useEffect } from "react";



const FormAccident2 = (props) => {
    const { page, onKeyUp, getUser, currentUser, tableauUsers } = props;
    const [tableauInformation, setTableauInformation] = useState([]);

    /********** DATAS POUR LE SELECT DE MODE D'INFORMATION **********/
    useEffect(() => {
        fetch(`https://localhost:7027/api/ModeInformations`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        }).then((resp) => resp.text())
            .then((text) => {
                const data = text.toJson();
                setTableauInformation(data);
            }).catch(console.log());
    }, []);


    return (
        <div className="col-10 col-sm-6 px-4 py-5 px-md-5 circle2 bg-glass my-3 mx-auto">
            <div className="row text-center mt-5">

                {/* MATRICULE + DATE */}
                <div className="row">
                    <InputForm classDiv="form-outline col-12 col-md-5 mx-auto d-inline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule (si connu)" name="Matricule" id="matricule" type="text" onKeyUp={onKeyUp} placeholder="Hierarchique" defaultValue="" />
                    <InputForm classDiv="form-outline col-12 col-md-5 mx-auto d-inline mt-md-4 mt-lg-0" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Date d'information" name="dateConnaissance" id="dateConnaissance" type="datetime-local" />
                    <SelectAutoComplete classDiv="form-outline col-12 col-md-5 mx-auto d-inline d-none selectDiv" nameDiv="selectUserMatricule" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="matriculeOption" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="matricule" fonction={getUser} />
                    <div className="form-outline col-12 col-md-5 mx-auto d-inline"></div>
               </div>

                {/* NOM + PRENOM */}
                <div className="row mx-auto pe-5 mt-4">
                  <div className="mb-4 col-12 col-md-5 mx-auto">
                     <div className="d-inline">
                        <InputForm classDiv="form-outline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Nom" name="Name" id="nom" type="text" placeholder="Hierarchique" onKeyUp={onKeyUp} defaultValue="" />
                        <SelectAutoComplete classDiv="form-outline d-none selectDiv" nameDiv="selectUserName" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="users" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="nom + prenom" fonction={getUser} />
                     </div>
                  </div>

                  <div className="mb-4 col-12 col-md-5 mx-auto">
                     <div className="d-inline">
                        <InputForm classDiv="form-outline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Prenom" name="FirstName" id="prenom" type="text" placeholder="Hierarchique" onKeyUp={onKeyUp} defaultValue="" />
                        <SelectAutoComplete classDiv="form-outline d-none selectDiv" nameDiv="selectUserFirstname" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="users" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="prenom + nom" fonction={getUser} />
                     </div>
                  </div>
               </div>

                {/* MOYEN D'INFORMATION */}
                {(page == "interne") &&
                    <SelectForm classDiv="form-outline mb-4 col-8 col-md-6 mx-auto" classLabel="form-label fw-bold txtVert" intitule="Moyen d'information" classSelect="form-select" id="methode" name="methode" aria="Default select example" tableau={tableauInformation} />
                }
            </div>
        </div >
    );
}

export default FormAccident2;