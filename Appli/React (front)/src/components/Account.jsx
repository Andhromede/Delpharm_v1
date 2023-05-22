import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { Button } from "react-bootstrap";
import "../assets/css/account.css";
import Form from 'react-bootstrap/Form';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";



const Account = (props) => {
   const { auth } = useContext(AuthContext);
   const [utilisateur, setUtilisateur] = useState();
   // const [password, setPassword] = useState();
   
   const [service, setService] = useState();
   const [contrat, setContrat] = useState();
   const [csp, setCsp] = useState();
   const [poste, setPoste] = useState();


   useEffect(() => {

      if (auth.id) {

         fetch(`https://localhost:7027/api/Utilisateurs/${auth.id}`, {
            method: "GET",
            headers: { "content-type": "application/json" },
         }).then((resp) => resp.text())
            .then((text) => {
               let resultUser = text.toJson();
               setUtilisateur(resultUser);


               if (resultUser && resultUser.idService != null) {
                  fetch(`https://localhost:7027/api/Services/${resultUser.idService}`, {
                     method: "GET",
                     headers: { "content-type": "application/json" },
                  }).then((resp) => resp.text())
                     .then((text) => {
                        let resultService = text.toJson();
                        setService(resultService);
                     }).catch(console.log());
               }


               if (resultUser && resultUser.idContrat != null) {
                  fetch(`https://localhost:7027/api/Contrats/${resultUser.idContrat}`, {
                     method: "GET",
                     headers: { "content-type": "application/json" },
                  }).then((resp) => resp.text())
                     .then((text) => {
                        let resultContrat = text.toJson();
                        setContrat(resultContrat);
                     }).catch(console.log());
               }


               if (resultUser && resultUser.idPoste != null) {
                  fetch(`https://localhost:7027/api/Postes/${resultUser.idPoste}`, {
                     method: "GET",
                     headers: { "content-type": "application/json" },
                  }).then((resp) => resp.text())
                     .then((text) => {
                        let resultPoste = text.toJson();
                        setPoste(resultPoste);
                     }).catch(console.log());
               }


               if (resultUser && resultUser.IdCsp != null) {
                  fetch(`https://localhost:7027/api/Csps/${resultUser.idCsp}`, {
                     method: "GET",
                     headers: { "content-type": "application/json" },
                  })
                     .then((resp) => resp.text())
                     .then((text) => {
                        let resultCsp = text.toJson();
                        setCsp(resultCsp);
                     })
                     .catch(console.log());
               }

            }).catch(console.log());
         //    fetch(`https://localhost:7027/api/Security/changePass`, {
         //       method: "POST",
         //       headers: { "content-type": "application/json" },
         //    }).then((resp) => resp.text())
         //     .then((text) => {
         //         let result = text.toJson();
         //           setPassword(result);
         //   });
         //      console.log(password);
      }

   },[]);

   const ChangePassword =(evt)=>{
      evt.preventDefault();
      const oldPassword = document.getElementById("oldPassword").value;
      console.log(oldPassword);
      const newPassword = document.getElementById("newPassword").value;
      console.log(newPassword);
      const confirmePassword = document.getElementById("confirmePassword").value;
      console.log(confirmePassword);
      
      if(oldPassword === utilisateur.password){
         if(newPassword === confirmePassword){
            console.log("ok");
         }
         else{
   
            console.log("Les deux mots doivent être identique");
         }
      }
      else{
         console.log("hashage...");
      }
   };
   
   return (
      <div className="col-12 col-md-8 col-lg-8 col-xxl-6 mx-auto mt-5 mb-5">
         <div className="card formRadius">
            <div className="card-body">

               <div className="row mx-auto">
                  <div className="col-md-12">
                     <h4 className="fw-bold">Votre profil</h4>
                     <hr className="w-50"></hr>
                  </div>
               </div>

               <div className="row mx-auto">
                  <div className="col-md-10 mx-auto">
                     <Form>
                        <Button variant="warning" className="mb-5 col-12 col-md-10 col-lg-6 col-xxl-6 buttonAccount" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                           Changer mon mot de passe
                        </Button>

                        {(utilisateur && utilisateur !=null) &&
                           <>
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Matricule" name="matricule" id="matricule" type="text" placeholder={utilisateur.matricule} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Nom" name="nom" id="nom" type="text" placeholder={utilisateur.nom} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Prenom" name="prenom" id="prenom" type="text" placeholder={utilisateur.prenom} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Date de naissance" name="dateNaissance" id="dateNaissance" type="text" placeholder={new Date(utilisateur.dateNaissance).toLocaleDateString()} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Email" name="email" id="email" type="text" placeholder={utilisateur.email} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Téléphone" name="telephone" id="telephone" type="text" placeholder={utilisateur.telephone} status="true" />
                              <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Sexe" name="sexe" id="sexe" type="text" placeholder={utilisateur.sexe} required="required" status="true" />
                           </>
                        }
                        
                        {(service && service != null) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Service" name="service" id="IdService" type="text" placeholder={service.nom} required="required" status="true" />
                        }
                        {(! service) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Service" name="service" id="IdService" type="text" placeholder="" required="required" status="true" />
                        }

                        {(contrat && contrat != null) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Contrat" name="contrat" id="IdContrat" type="text" placeholder={contrat.nom} required="required" status="true" />
                        }
                        {(! contrat) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Contrat" name="contrat" id="IdContrat" type="text" placeholder="" required="required" status="true" />
                        }

                        {(csp && csp != null) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Csp" name="csp" id="IdCsp" type="text" placeholder={csp.nom} required="required" status="true" />
                        }

                        {(poste && poste != null) &&
                           <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label fw-bold" classDivInput="col-10 col-xxl-9" classInput="form-control here" intitule="Poste" name="poste" id="IdPoste" type="text" placeholder={poste.nom} required="required" status="true" />
                        }
                     </Form>
                  </div>
               </div>


               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                     <div className="modal-content borderRadiusModal">

                        <div className="modal-header mx-auto">
                           <h5 className="modal-title mx-auto fw-bold" id="exampleModalLabel">Changer mon mot de passe</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>

                        <div className="modal-body mx-auto">
                           <form>
                              <div className="mb-4">
                                 <label htmlFor="oldPassword" className="col-form-label fw-bold">Ancien mot de passe</label>
                                 <input type="password" className="form-control w-auto" id="oldPassword" />
                              </div>

                              <div className="mb-4">
                                 <label htmlFor="password" className="col-form-label fw-bold">Nouveau mot de passe</label>
                                 <input type="password" className="form-control w-auto" id="newPassword" />
                              </div>

                              <div className="mb-4">
                                 <label htmlFor="confirmePassword" className="col-form-label fw-bold" >Confirmer mot de passe</label>
                                 <input type="password" className="form-control w-auto" id="confirmePassword" />
                              </div>
                           </form>
                        </div>

                        <div className="modal-footer buttonFooter mx-auto">
                           <button type="button" className="btn btn-danger buttonAccount" data-bs-dismiss="modal">Annuler</button>
                           <button type="button" className="btn btn-success buttonAccount" onClick={ChangePassword}>Valider</button>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Account;
