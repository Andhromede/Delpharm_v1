import { useState } from 'react';
import '../../assets/css/ResumFormsAccident.css';
import InputForm from '../../components/InputForm';
// import SelectForm from '../../components/SelectForm';
// import SelectAutoComplete from '../../components/SelectAutoComplete';


const ResumAccidentExtern = (props) => {

    /********** AFFICHE/MASQUE LES INPUTS SELON LES CHECKBOX/RADIOS COCHES **********/
    const showElement = (evt) => {
        let divTemoins = document.querySelector('[name="divTemoins"]');
        let divTiers = document.querySelector('[name="divTiers"]');
        let divAutre = document.querySelector('[name="divAutres"]');
        let divPolice = document.querySelector('[name="divPolice"]');
        let divTransportee = document.querySelector('[name="divTransportee"]');

        switch (evt.target.id) {
            case 'temoins':
                return showAndHiddeInput(evt.target.checked, divTemoins);
            case 'tiers':
                return showAndHiddeInput(evt.target.checked, divTiers);
            case 'autres':
                return showAndHiddeInput(evt.target.checked, divAutre);
            case 'police':
                return showAndHiddeInput(evt.target.checked, divPolice);
            case 'transportee':
                return showAndHiddeInput(evt.target.checked, divTransportee);
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
            <h1 className="text-light mt-5 mb-3 text-center">ACCIDENT EXTERNE</h1>

            <div className="bg-white my-5 py-3 row mx-auto">

                {/* SECTION GAUCHE */}
                <div className="col me-2">

                    {/* VICTIME */}
                    <div>
                        <h3 className="my-4 text-light text-center bg-success">Victime</h3>

                        <div className="">
                            <div>
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Matricule" name="matricule" id="matricule" type="text" placeholder="ex: 12345" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Prenom" name="prenom" id="prenom" type="text" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 " classInput="form-control placeholderTxt" intitule="Téléphone" name="telephone" id="telephone" type="text" />
                            </div>
                        </div>
                    </div>

                    {/* HIERARCHIQUE */}
                    <div>
                        <h3 className="my-4 text-light text-center bg-success">Hierarchique</h3>
                        
                        <div>
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Date de connaissance" name="date" id="date" type="text" placeholder="ex: 10/02/1975" />
                            <InputForm classDiv="form-group row" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Heure de connaissance" name="heure" id="heure" type="text" placeholder="ex: 09:25" />
                        </div>
                    </div>

                    {/* 1ERE PERSONNE PREVENUE */}
                    <div>
                        <h4 className="mt-5 mb-4 text-light text-center bg-success">1ère personne prévenue au siège</h4>

                        <div className="row mt-3 ms-1">
                            <div className="col-12">
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Nom" name="nom" id="nom" type="text" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Date" name="dateNaissance" id="date" type="text" placeholder="ex: 10/02/2022" />
                                <InputForm classDiv="form-group row mb-1" classLabel="col-8 col-xxl-3 col-form-label text-dark fw-bold" classDivInput="col-10 col-xxl-9 mt-auto " classInput="form-control  placeholderTxt" intitule="Heure" name="heure" id="heure" type="text" placeholder="ex: 09:25" />
                            </div>

                            <div className="col-12 mt-5">
                                <InputForm classDiv="text-start form-check col test" name="temoins" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Témoin(s)" id="temoins" type="checkbox" handleFunction={showElement} />
                                <div className="form-outlinetext-start mb-3 d-none" name="divTemoins">
                                    <textarea className="form-control placeholderTxt" name="lieu" rows="2" placeholder="Nom(s) + Prénom(s)" />
                                </div>
                            </div>

                            <div className="col-12">
                                <InputForm classDiv="text-start form-check col test" name="tiers" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Tiers en cause" id="tiers" type="checkbox" handleFunction={showElement} />
                                <div className="form-outlinetext-start mb-3 d-none" name="divTiers">
                                    <textarea className="form-control placeholderTxt" name="lieu" rows="2" placeholder="Nom(s) + Prénom(s)" />
                                </div>
                            </div>

                            <div className="col-12">
                                <InputForm classDiv="text-start form-check col test" name="autres" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Autre(s) victime(s)" id="autres" type="checkbox" handleFunction={showElement} />
                                <div className="form-outlinetext-start mb-3 d-none" name="divAutres">
                                    <textarea className="form-control placeholderTxt" name="lieu" rows="2" placeholder="Nom(s) + Prénom(s)" />
                                </div>
                            </div>

                            <div className="col-12">
                                <InputForm classDiv="text-start form-check col test" name="police" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Rapport de police" id="police" type="checkbox" handleFunction={showElement} />
                                <div className="form-outlinetext-start mb-3 d-none" name="divPolice">
                                    <textarea className="form-control placeholderTxt" name="lieu" rows="2" placeholder="Informations complémentaires ..." />
                                </div>
                            </div>

                            <div className="col-12">
                                <InputForm classDiv="text-start form-check col test" name="transportee" classInput="form-check-input placeholderTxt" classLabel="form-label fw-bold" intitule="Victime transportée" id="transportee" type="checkbox" handleFunction={showElement} />
                                <div className="form-outlinetext-start mb-3 d-none" name="divTransportee">
                                    <textarea className="form-control placeholderTxt" name="lieu" rows="2" placeholder="Informations complémentaires ..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fw-bolder text-danger mt-5 h4">Si constat, demandez la photocopie et envoyez la avec la déclaration !</div>
                </div>

                {/* SECTION DROITE */}
                <div className="col-7 ps-4 border-left">
                    <div>
                        <h3 className="mt-4 mb-4 text-light text-center bg-success">Accident</h3>

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

                        {/* MOTIF + LIEU ACCIDENT */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Motif, lieu de déplacement (départ/arrivée) :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" placeholder="" />
                        </div>

                        {/* CIRCONSTANCE ACCIDENT */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Circonstance de l'accident :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" placeholder="" />
                        </div>

                        {/* REMARQUES + RESERVES */}
                        <div className="form-outlinetext-start mt-4">
                            <label className="form-label text-dark fw-bolder">Remarques / Réserves :</label>
                            <textarea className="form-control placeholderTxt" name="lieu" rows="4" />
                        </div>


                        <div>
                            <h4 className="mt-4 mb-4 text-light text-center bg-success">Blessures</h4>

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


export default ResumAccidentExtern;
