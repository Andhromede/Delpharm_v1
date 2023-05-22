import React from 'react';
import InputForm from '../InputForm';
import SelectForm from '../SelectForm';
import SelectAutoComplete from '../SelectAutoComplete';
import { useState, useEffect } from "react";


const FormAccident1 = (props) => {
   const { page, onKeyUp, getUser, currentUser, tableauUsers } = props;
   const [tableauContrat, setTableauContrat] = useState([]);
   const [tableauService, setTableauService] = useState([]);
   // const [tableauUsers, setTableauUsers] = useState([]);
   // const [currentUser, setCurrentUser] = useState();
   let [nbr, setNbr] = useState(0);


   /********** DATAS POUR LES SELECTS CONTRATS et SERVICES **********/
   useEffect(() => {
      fetch(`https://localhost:7027/api/Contrats`, {
         method: "GET",
         headers: { "content-type": "application/json" },
      }).then((resp) => resp.text())
         .then((text) => {
            const data = text.toJson();
            setTableauContrat(data);
         }).catch(console.log());

      fetch(`https://localhost:7027/api/Services`, {
         method: "GET",
         headers: { "content-type": "application/json" },
      }).then((resp) => resp.text())
         .then((text) => {
            const data = text.toJson();
            setTableauService(data);
         }).catch(console.log());

   }, []);



   return (
      <div className="col-10 col-sm-6 px-5 py-5 px-md-5 px-5 circle1 bg-glass my-3 mx-auto border-radius">
         < div className="row text-center mb-3">

            {/* MATRICULE + TELEPHONE */}
            <div className="row mx-auto pe-5">

               {(page === "interne") &&
                  <div className="d-inline">
                     <InputForm classDiv="form-outline col-12 col-md-5 mx-auto" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule (si connu)" name="Matricule" id="matricule" type="text" onKeyUp={onKeyUp} placeholder="Victime" defaultValue="" />
                     <SelectAutoComplete classDiv="form-outline col-12 col-md-5 mx-auto d-none selectDiv" nameDiv="selectUserMatricule" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="matriculeOption" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="matricule" fonction={getUser} />
                  </div>
               }

               {(page === "externe") &&
                  <div className="row mt-4">
                     <InputForm classDiv="form-outline col-12 col-md-5 mx-auto d-inline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule (si connu)" name="Matricule" id="matricule" type="text" placeholder="Victime" onKeyUp={onKeyUp} defaultValue="" />
                     <InputForm classDiv="form-outline col-12 col-md-5 mx-auto d-inline mt-md-4 mt-lg-0" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Téléphone" name="Telephone" id="telephone" type="text" placeholder="Victime" defaultValue="" />
                     <SelectAutoComplete classDiv="form-outline col-12 col-md-5 mx-auto d-inline d-none selectDiv" nameDiv="selectUserMatricule" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="matriculeOption" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="matricule" fonction={getUser} />
                     <div className="form-outline col-12 col-md-5 mx-auto d-inline"></div>
                  </div>
               }
            </div>

            {/* NOM + PRENOM */}
            <div className="d-inline">
               <div className="row mx-auto pe-5 mt-4">

                  <div className="mb-4 col-12 col-md-5 mx-auto">
                     <div className="d-inline">
                        <InputForm classDiv="form-outline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Nom" name="Name" id="nom" type="text" placeholder="Victime" onKeyUp={onKeyUp} defaultValue="" />
                        <SelectAutoComplete classDiv="form-outline d-none selectDiv" nameDiv="selectUserName" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="users" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="nom + prenom" fonction={getUser} />
                     </div>
                  </div>

                  <div className="mb-4 col-12 col-md-5 mx-auto">
                     <div className="d-inline">
                        <InputForm classDiv="form-outline" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Prenom" name="FirstName" id="prenom" type="text" placeholder="Victime" onKeyUp={onKeyUp} defaultValue="" />
                        <SelectAutoComplete classDiv="form-outline d-none selectDiv" nameDiv="selectUserFirstname" classSelect="form-select mb-4 col-12 col-md-5 mx-auto" nameSelect="getUser" idSelect="users" ariaLabel="Default select example" nameOption="matriculeOption" tableau={tableauUsers} idOption="getUser" textOption="prenom + nom" fonction={getUser} />
                     </div>
                  </div>
               </div>


               {/* SELECT SERVICE + CONTRAT */}
               {(page === "interne") &&
                  <div className="row mx-auto pe-5">
                     <SelectForm classDiv="col-12 col-md-5 form-outline mb-3 mx-auto" nomDiv="selectDiv" classLabel="form-label fw-bold txtVert" intitule="Contrat" classSelect="form-select selectContrat" id="IdContrat" name="IdContrat" aria="Default select example" tableau={tableauContrat} currentUser={currentUser} nameOption="selectContrat" />
                     <SelectForm classDiv="col-12 col-md-5 form-outline mb-3 mx-auto" nomDiv="selectDiv" classLabel="form-label fw-bold txtVert" intitule="Service" classSelect="form-select selectService" id="IdService" name="IdService" aria="Default select example" tableau={tableauService} currentUser={currentUser} nameOption="selectService" />
                  </div>
               }
            </div>
         </div>
      </div>
   );
}

export default FormAccident1;