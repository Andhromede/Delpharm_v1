import { useState } from 'react';
import '../../assets/css/ResumFormsAccident.css';
import InputForm from '../../components/InputForm';
// import SelectForm from '../../components/SelectForm';
// import SelectAutoComplete from '../../components/SelectAutoComplete';


const ResumAccidentIntern = (props) => {

    /********** AFFICHE/MASQUE LES INPUTS SELON LES CHECKBOX/RADIOS COCHES **********/
    const showElement = (evt) => {
        let divTemoins = document.querySelector('[name="divTemoins"]');
        let divPremierePersonne = document.querySelector('[name="divPremierePersonne"]');

        switch (evt.target.id) {
            case 'temoins':
                return showAndHiddeInput(evt.target.checked, divTemoins);
            case 'premierePersonne':
                return showAndHiddeInput(evt.target.checked, divPremierePersonne);
            default:
                return showAndHiddeInput(evt.target.checked, divTransportee);
        }

    }

    /********** AFFICHE/MASQUE LES INPUTS DONNES **********/
    function showAndHiddeInput(checkboxOrRadioTargeted, divNomTargeted, inputToHidden) {
        if (checkboxOrRadioTargeted == false) {
            divNomTargeted.classList.add("d-none");
        } else {
            divNomTargeted.classList.remove("d-none");
            inputToHidden?.classList.add("d-none");
        }
    }

    return (
        <div className="container">
            <h1 className="text-light mt-5 mb-3 text-center">ACCIDENT INTERNE</h1>

            <div className="bg-white my-5 py-3 row mx-auto">

                {/* SECTION GAUCHE */}
                <div className="col me-2">

                    {/* VICTIME */}
                    <div>
                        <h3 className="my-4 text-dark text-center bg-warning">Victime</h3>

                        <div className="">
                            <div>
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Matricule" name="matricule" id="matricule" type="text" placeholder="ex: 12345" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Prenom" name="prenom" id="prenom" type="text" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Service" name="service" id="service" type="text" />
                            </div>

                            <div className="row mt-3 ms-1">
                                <InputForm classDiv="text-start form-check col" name="UAP" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="UAP" id="uap" type="checkbox" />
                                <InputForm classDiv="text-start form-check col" name="onco" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Onco" id="onco" type="checkbox" />
                                <InputForm classDiv="text-start form-check col" name="hs" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="HS" id="hs" type="checkbox" />
                                <InputForm classDiv="text-start form-check col" name="ha" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="HA" id="ha" type="checkbox" />
                                <InputForm classDiv="text-start form-check col" name="lfb" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="LFB/Man/CdP" id="lfb" type="checkbox" />
                            </div>
                        </div>
                    </div>

                    {/* HIERARCHIQUE */}
                    <div>
                        <h3 className="my-4 text-dark text-center bg-warning">Hierarchique</h3>

                        {/* <div className=""> */}
                        <div>
                            <InputForm classDiv="form-group row mb-3" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Date de naissance" name="dateNaissance" id="dateNaissance" type="text" placeholder="ex: 10/02/1975" />
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Heure de connaissance" name="heure" id="heure" type="text" placeholder="ex: 09:25" />
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Mode d'information" name="comment" id="comment" type="text" />
                            <div className="text-dark">(Téléphone, orale, main courante, autre ...)</div>
                        </div>
                        {/* </div> */}
                    </div>

                    {/* INTERVENTION */}
                    <div>
                        <h4 className="my-4 text-dark text-center bg-warning">Intervention / Appel des secours</h4>

                        {/* TEMOINS */}
                        <div className="row ms-1">
                            {/* <InputForm classDiv="text-start form-check col test" name="temoins" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Témoin(s)" id="temoins" type="radio" onClick={showElement}/> */}
                            <div className="form-check">
                                <label className="form-label text-dark fw-bolder">Témoin(s) :</label>
                                <input className="form-check-input placeholderTxt test" type="checkbox" value="" id="temoins" name="temoins" onClick={showElement} />
                            </div>

                            <div className="form-outlinetext-start mb-4 d-none" name="divTemoins">
                                <div className="col-9 text-danger fw-bolder mb-2 text-decoration-underline text-center mx-auto">Un témoignage écrit est nécéssaire !</div>
                                <label className="form-label text-dark fw-bolder">Nom(s) :</label>
                                <textarea className="form-control placeholderTxt" name="lieu" rows="3" />
                            </div>
                        </div>

                        {/* <h5 className="text-danger fw-bolder my-4 text-center">A défaut de témoins </h5> */}

                        {/* 1ERE PERSONNE PREVENUE */}
                        <div className="row ms-1">
                            {/* <InputForm classDiv="text-start form-check col" name="temoins" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="1ère personne prévenue :" id="premierePersonne" type="radio" onClick={showElement}/> */}
                                <div className="form-check">
                                    <label className="form-label text-dark fw-bolder">1ère personne prévenue :</label>
                                    <input className="form-check-input placeholderTxt test" type="checkbox" value="" id="premierePersonne" name="premierePersonne" onClick={showElement} />
                                    {/* <div className="col-9 text-danger">(Faire un témoignage écrit)</div> */}
                                </div>

                            <div className="d-none mb-4" name="divPremierePersonne">
                                <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col" classInput="form-control ms-3 placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                                <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col placeholderTxt mt-auto ms-3" classInput="form-control  placeholderTxt" intitule="Heure de connaissance" name="heure" id="heure" type="text" />
                            </div>
                        </div>

                        {/* TINTERVENTION 8300 */}
                        <div className="row">
                            <span className="fw-bolder col-5">Intervention du 8300 </span>
                            <InputForm classDiv="text-start form-check col-2" name="intervention" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="oui" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col-2" name="intervention" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="non" id="non" type="radio" />
                        </div>
                    </div>

                    {/* Analyse à chaud */}
                    <div>
                        <h4 className="my-4 text-dark text-center bg-warning">Analyse à chaud / Maintien dans l'emploi</h4>

                        {/* CHECKBOX */}
                        <div className="row mt-3 ms-1">
                            <InputForm classDiv="text-start form-check col" name="infirmière" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Infirmière" id="infirmière" type="checkbox" />
                            <InputForm classDiv="text-start form-check col ms-3" name="HSE" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="HSE" id="HSE" type="checkbox" />
                            <InputForm classDiv="text-start form-check col" name="N+1" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="N+1/AM" id="n+1" type="checkbox" />
                            <InputForm classDiv="text-start form-check col ms-3" name="codir" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="codir" id="codir" type="checkbox" />
                            <InputForm classDiv="text-start form-check col" name="CSSCT" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="CSSCT" id="lfCSSCTb" type="checkbox" />
                        </div>

                        {/* RETOUR POSTE */}
                        <div className="row mt-3">
                            <span className="fw-bolder col-5">Retour au poste :</span>
                            <InputForm classDiv="text-start form-check col-2" name="poste" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="oui" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col-2" name="poste" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="non" id="non" type="radio" />
                        </div>

                        {/* TRAVAIL LEGER */}
                        <div className="row ">
                            <span className="fw-bolder col-5">Travail léger possible :</span>
                            <InputForm classDiv="text-start form-check col-2" name="travail" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="oui" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col-2" name="travail" classInput="form-check-input placeholderTxt" classLabel="form-label" intitule="non" id="non" type="radio" />
                        </div>
                    </div>
                </div>

                {/* SECTION DROITE */}
                <div className="col-7 ps-4 border-left">
                    <div>
                        <h3 className="my-4 text-dark text-center bg-warning">Accident</h3>

                        {/* DATE + HEURE + LIEU ACCIDENT*/}
                        <div className="row" name="">
                            <div className="col-6 d-flex">
                                <label className="col-3 text-dark fw-bold">Date :</label>
                                <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: 10/02/2022" />
                            </div>

                            <div className="col-6 d-flex">
                                <label className="col-3 text-dark fw-bold">Heure :</label>
                                <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex : 09:25" />
                            </div>

                            <div className="form-outlinetext-start mt-4">
                                <label className="form-label text-dark fw-bolder">Lieu précis de l'accident :</label>
                                <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                            </div>
                        </div>

                        {/* <hr className="w-75 mx-auto mt-5 mb-4"/>

                    

                    <hr className="w-75 mx-auto mt-5 mb-4"/> */}

                        {/* CIRCONSTANCE ACCIDENT */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Circonstance de l'accident :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" placeholder="Que faisait la victime au moment de l'accident?  Comment est-ce survenu? Qu'est-ce qui à causé la blessure?" />
                        </div>

                        {/* DU */}
                        <div className="row mt-3">
                            <span className="fw-bolder col-5">Accident identifié dans le DU</span>
                            <InputForm classDiv="text-start form-check col" name="du" classInput="form-check-input" classLabel="form-label" intitule="Oui" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col" name="du" classInput="form-check-input" classLabel="form-label" intitule="Non" id="non" type="radio" />
                            <div className="col-4 text-dark placeholderTxt">(Si non alors modifications)</div>
                        </div>

                        {/* EXPLOITATION MATERIEL */}
                        <div className="row mt-3">
                            <span className="fw-bolder col-5">Mode d'exploitation de l'équipement</span>
                            <InputForm classDiv="text-start form-check col" name="exploitation" classInput="form-check-input" classLabel="form-label" intitule="Normal" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col" name="exploitation" classInput="form-check-input" classLabel="form-label" intitule="Particulière" id="non" type="radio" />
                            <InputForm classDiv="text-start form-check col" name="exploitation" classInput="form-check-input" classLabel="form-label" intitule="Maintenance" id="non" type="radio" />
                        </div>

                        {/* REMARQUES + RESERVES */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Remarques / Réserves :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                        </div>

                        {/* ACTIONS */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Actions mises en oeuvres :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                        </div>

                        {/* RDP */}
                        <div className="row mt-3">
                            <span className="fw-bolder col-5">Déclenchement d'une RDP</span>
                            <InputForm classDiv="text-start form-check col" name="rdp" classInput="form-check-input" classLabel="form-label" intitule="Oui" id="oui" type="radio" />
                            <InputForm classDiv="text-start form-check col" name="rdp" classInput="form-check-input" classLabel="form-label" intitule="Non" id="non" type="radio" />
                            <div className="col-4 text-dark placeholderTxt">(Si non alors modifications)</div>
                        </div>

                        <div>
                            <h4 className="my-4 text-dark text-center bg-warning">Blessures</h4>

                            {/* LESIONS 1 */}
                            <div className="row" name="">
                                <div className="col-4">
                                    <label className="col-4 text-dark fw-bold">Lésion</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Main" />
                                </div>

                                <div className="col-4">
                                    <label className="col text-dark fw-bold">Traumatisme</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Coupure" />
                                </div>

                                <div className="col-3">
                                    <label className="col text-dark fw-bold">Côté</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Droite" />
                                </div>
                            </div>

                            {/* LESIONS 2 */}
                            <div className="row mt-4" name="">
                                <div className="col-4">
                                    <label className="col-4 text-dark fw-bold">Lésion</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Bras" />
                                </div>

                                <div className="col-4">
                                    <label className="col text-dark fw-bold">Traumatisme</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Brûlure" />
                                </div>

                                <div className="col-3">
                                    <label className="col text-dark fw-bold">Côté</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Gauche" />
                                </div>
                            </div>

                            {/* LESIONS 3 */}
                            <div className="row mt-4" name="">
                                <div className="col-4">
                                    <label className="col-4 text-dark fw-bold">Lésion</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Torse" />
                                </div>

                                <div className="col-4">
                                    <label className="col text-dark fw-bold">Traumatisme</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Perforation" />
                                </div>

                                <div className="col-3">
                                    <label className="col text-dark fw-bold">Côté</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Avant" />
                                </div>
                            </div>

                            {/* LESIONS 3 */}
                            <div className="row mt-4" name="">
                                <div className="col-4">
                                    <label className="col-4 text-dark fw-bold">Lésion</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Cou" />
                                </div>

                                <div className="col-4">
                                    <label className="col text-dark fw-bold">Traumatisme</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Douleurs" />
                                </div>

                                <div className="col-3">
                                    <label className="col text-dark fw-bold">Côté</label>
                                    <input className="col form-control placeholderTxt" type="text" id="" name="" placeholder="ex: Arrière" />
                                </div>
                            </div>
                        </div>

                        {/* DATES ET SIGNATURES */}
                        <div className="row mt-4">
                            <div className="col-6 form-outlinetext-start mt-4">
                                <label className="form-label text-dark fw-bolder">Date et signature de la victime :</label>
                                <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                            </div>

                            <div className="col-6 form-outlinetext-start mt-4">
                                <label className="form-label text-dark fw-bolder">Date et signature du hiérarchique :</label>
                                <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default ResumAccidentIntern;
