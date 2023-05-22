import { React, useEffect, useState } from 'react';
import InputForm from '../InputForm';
import { BsQuestionCircle } from 'react-icons/bs';

const FormAccident3 = (props) => {
    const { page } = props


    /********** AFFICHE/MASQUE LES INPUTS SELON LES CHECKBOX/RADIOS COCHES **********/
    const showElement = (evt) => {
        let divNomSecouriste = document.querySelector('[name="divNomSecouriste"]');
        let divNomTemoin = document.querySelector('[name="divNomTemoin"]');
        let divNomPersonne = document.querySelector('[name="divNomPersonne"]');
        let divNomTiers = document.querySelector('[name="divNomTiers"]');
        let divNomVictimes = document.querySelector('[name="divNomVictimes"]');
        let divNomPolice = document.querySelector('[name="divNomPolice"]');
        let divNomTransportee = document.querySelector('[name="divNomTransportee"]');

        if (page == "interne") {
            if (evt.target.id == "temoin") {
                showAndHiddeInput(evt.target.checked, divNomTemoin, divNomPersonne);
            }

            if (evt.target.id == "premierePersonne") {
                showAndHiddeInput(evt.target.checked, divNomPersonne, divNomTemoin);
            }

            if (evt.target.id == "secourIntern") {
                showAndHiddeInput(evt.target.checked, divNomSecouriste);
            }
        }

        if (page == "externe") {
            switch (evt.target.id) {
                case 'temoin':
                    return showAndHiddeInput(evt.target.checked, divNomTemoin);
                case 'premierePersonne':
                    return showAndHiddeInput(evt.target.checked, divNomPersonne);
                case 'tiers':
                    return showAndHiddeInput(evt.target.checked, divNomTiers);
                case 'victimes':
                    return showAndHiddeInput(evt.target.checked, divNomVictimes);
                case 'police':
                    return showAndHiddeInput(evt.target.checked, divNomPolice);
                default:
                    return showAndHiddeInput(evt.target.checked, divNomTransportee);
            }
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
        <div className="col-10 col-sm-6 px-4 py-5 px-md-5 circle3 bg-glass my-3 mx-auto">
            <div className="row text-center mb-4 me-3 pt-5">
                <div className="row ms-3 text-start  mt-5">

                    {/* RADIOS TEMOIN */}
                    <div className="form-check col-10 col-lg-4 mx-auto pt-4 ps-5">
                        {(page == "interne") &&
                            <input className="form-check-input" type="radio" value="" id="temoin" name="flexDefault" onClick={showElement} />
                        }

                        {(page == "externe") &&
                            <input className="form-check-input" type="checkbox" value="" id="temoin" name="flexDefault" onClick={showElement} />
                        }

                        <label className="form-check-label txtVert" htmlFor="temoin">
                            <span className="fw-bolder h5" title="Faire un témoignage écrit">Témoin(s) </span>
                            <span className="txtGris fw-bolder"> <BsQuestionCircle title="Il est nécéssaire de faire un témoignage écrit !" /> </span>
                        </label>
                    </div>


                    {/* RADIOS 1ERE PERSONNE PREVENUE */}
                    {(page == "interne") &&
                        <InputForm classDiv="form-check col-10 col-lg-4 mx-auto pt-4 ps-0 mb-2" name="flexDefault" classInput="form-check-input" classLabel="form-check-label txtVert h5 fw-bolder" intitule="1ère personne prévenue au siège" id="premierePersonne" type="radio" handleFunction={showElement} />
                    }

                    {(page == "externe") &&
                        <InputForm classDiv="form-check col-10 col-lg-4 mx-auto pt-4 ps-0 mb-2" name="flexDefault" classInput="form-check-input" classLabel="form-check-label txtVert h5 fw-bolder" intitule="1ère personne prévenue au siège" id="premierePersonne" type="checkbox" handleFunction={showElement} />
                    }

                    {/* INPUTS CACHES TEMOIN */}
                    <div name="divNomTemoin" className="d-none">
                        <hr className="my-4" />

                        <div className="text-danger text-center fw-bolder mb-4 h5 text-decoration-underline"> RAPPEL : Un témoignage écrit est nécéssaire ! </div>

                        {/* téléphone + nom témoin */}
                        <div className="row mt-3">
                            <InputForm classDiv="form-outline mb-4 mt-3 col-6 me-auto mx-auto text-center mt-auto" name="divTelephoneTemoin" classInput="form-control" classLabel="form-label txtGris" intitule="Téléphone du témoin" placeholder="ex: 0783024828" id="telephoneTemoin" type="text" />
                            <InputForm classDiv="form-outline mb-4 mt-3 col-6 me-auto mx-auto text-center mt-auto" name="divNomTemoin" classInput="form-control" classLabel="form-label txtGris" intitule="Nom du témoin" placeholder="Nom &amp; Prénom" id="nomTemoin" type="text" />
                        </div>

                        {/* témoin interne/externe */}
                        <div className="row">
                            <InputForm classDiv="ps-5 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Témoin interne" name="typeTemoin" id="temoinInterne" type="radio" />
                            <InputForm classDiv="ps-5 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Témoin externe" name="typeTemoin" id="temoinExterne" type="radio" />
                        </div>
                    </div>

                    {/* INPUTS CACHES 1ERE PERSONNE */}
                    <div className="row form-outline mb-4 me-auto d-none mx-auto mt-3 text-center" name="divNomPersonne">
                        <hr className="my-4" />
                        <InputForm classDiv="col-12 col-md-6" classInput="form-control" classLabel="form-label txtGris" intitule="Nom de la 1ère personne prévenue au siège" id="nom" type="text" />
                        <InputForm classDiv="form-outline mb-3 col-12 col-md-6 mx-auto" classInput="form-control" classLabel="form-label txtGris" intitule="Date de connaissance" name="dateConnaissance" id="dateConnaissance" type="datetime-local" />
                    </div>
                </div>


                {(page == "interne") &&
                    <>
                        <div className="col-11 mx-auto"><hr className="mt-2 mx-auto" /></div>
                        {/* CHECKBOX 8300 */}
                        <div className="ms-3"><InputForm classDiv="ps-5 form-check col-10 mt-4 text-start" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Intervention du 8300" name="divIntervention" id="premierePersonne" type="checkbox" /></div>

                        {/* CHECKBOX INFIRMIERE + MEDECIN + SECOURS + 1ere PERSONNE */}
                        <div className="row mt-4 text-start ms-3">
                            <InputForm classDiv="ps-5 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Infirmière" name="divInfirmiere" id="infirmière" type="checkbox" />
                            <InputForm classDiv="ps-3 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Médecin de travail" name="divMedecin" id="medecin" type="checkbox" />
                            <InputForm classDiv="ps-5 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Secouriste" id="secourIntern" type="checkbox" page="interne" handleFunction={showElement} />
                            <InputForm classDiv="ps-3 form-check col-10 col-lg-6" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Secours externe" name="divSecourExtern" id="secourExterne" type="checkbox" page="interne" />
                            <InputForm classDiv="ms-2 form-outline mb-4 col-5 me-auto text-center d-none pb-4" nomDiv="divNomSecouriste" classInput="form-control" placeholder="Nom du secouriste" id="nomSecouriste" type="text" page="interne" />
                        </div>
                    </>
                }


                {(page == "externe") &&
                    <>
                        <div className="col-11 mx-auto"><hr className="mt-4 mx-auto" /></div>
                        <div className="ps-4 col-12 text-start text-danger mb-3">( Si constat, demandez la photocopie et envoyez la avec la déclaration )</div>

                        {/* TIERS EN CAUSE (CHECKBOX + INPUT) */}
                        <div className="row">
                            <InputForm classDiv="ps-5 form-check col-10 mt-4 text-start" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Tiers en cause" id="tiers" type="checkbox" page="externe" handleFunction={showElement} />
                            <InputForm classDiv="ps-5 form-outline mb-4 col-8 me-auto text-center d-none" nomDiv="divNomTiers" classInput="form-control" placeholder="Nom du tiers" id="nomTiers" type="text" page="externe" />
                        </div>

                        {/* AUTRES VICTIMES (CHECKBOX + INPUT) */}
                        <div className="row">
                            <InputForm classDiv="ps-5 form-check col-10 text-start" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Autre(s) Victime(s)" id="victimes" type="checkbox" page="externe" handleFunction={showElement} />
                            <InputForm classDiv="ps-5 form-outline mb-4 col-8 me-auto text-center d-none" nomDiv="divNomVictimes" classInput="form-control" placeholder="Nom des victimes" id="nomVictimes" type="text" page="externe" />
                        </div>

                        {/* RAPORT DE POLICE (CHECKBOX + INPUT) */}
                        <div className="row">
                            <InputForm classDiv="ps-5 form-check col-10 text-start" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Rapport de police" id="police" type="checkbox" page="externe" handleFunction={showElement} />
                            <InputForm classDiv="ps-5 form-outline mb-4 col-8 me-auto text-center d-none" nomDiv="divNomPolice" classInput="form-control" placeholder="Renseignements" id="nomPolice" type="text" page="externe" />
                        </div>

                        {/* VICTIME TRANSPORTEE (CHECKBOX + INPUT) */}
                        <div className="row pb-5">
                            <InputForm classDiv="ps-5 form-check col-10 text-start" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Victime transportée" id="transportee" type="checkbox" page="externe" handleFunction={showElement} />
                            <InputForm classDiv="ps-5 form-outline mb-4 col-8 me-auto text-center d-none" nomDiv="divNomTransportee" classInput="form-control" placeholder="Nom de la victime" id="nomTransportee" type="text" page="externe" />
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default FormAccident3;