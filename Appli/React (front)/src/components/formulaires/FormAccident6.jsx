import { React } from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../InputForm';
import DU from "../../assets/fichiers/DU Delpharm Lille.02.04.20.xlsx";
import { SiMicrosoftexcel } from 'react-icons/si';


const FormAccident6 = () => {
    
    return (
        <div className="col-12 col-sm-6 px-4 px-md-5 circle4 bg-glass mb-3 mx-auto mt-3">
            <div className="row text-center mb-4 me-3 pt-5">
                <div className="row mt-4 ps-5">
                    
                    <div className="row mt-5">
                        <InputForm classDiv="text-start form-check col-9" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Accident identifié dans le DU" name="du" id="du" type="checkbox"/>
                        <Link to={DU} className="btn btn-sm bg-success text-light me-auto col-3 col-lg-1" target="_blank"><SiMicrosoftexcel/></Link>
                    </div>

                    <div className="my-3 ">
                        <div className="text-start txtVert fw-bolder h5">Mode d'exploitation de l'equipement :</div>
                        <InputForm classDiv="form-check text-start" classInput="form-check-input" classLabel="txtGris fw-bolder" intitule="Normal" name="exploitation" id="normal" type="radio"/>
                        <InputForm classDiv="form-check text-start" classInput="form-check-input" classLabel="txtGris fw-bolder" intitule="Particulière" name="exploitation" id="particuliere" type="radio"/>
                        <InputForm classDiv="form-check text-start" classInput="form-check-input" classLabel="txtGris fw-bolder" intitule="Maintenance" name="exploitation" id="maintenance" type="radio"/>
                        <InputForm classDiv="form-check text-start" classInput="form-check-input" classLabel="txtGris fw-bolder" intitule="Aucun" name="exploitation" id="aucun" type="radio"/>
                    </div>

                    <div className="form-outline mt-3 mb-4 col-9 pb-5 text-start">
                        <label className="form-label">
                            <span className="h5 fw-bold txtVert">Materiel en cause</span>
                            <span className="text-danger fw-bold"> (optionnel)</span>
                        </label>

                        <textarea className="form-control" name="lieu" rows="5"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAccident6;