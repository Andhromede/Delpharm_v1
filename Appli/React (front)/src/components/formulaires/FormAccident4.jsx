import { React} from 'react';
import InputForm from '../InputForm';


const FormAccidentInterne4 = () => {

    return (
        <div className="col-10 col-sm-6 px-4 py-5 px-md-5 circle4 bg-glass my-3 mx-auto">
            <div className="row text-center mb-4 me-3 pt-5">
                <div className="row mt-4 text-start mx-auto">
                    <InputForm classDiv="ps-5 ms-lg-3 ps-md-3 form-check col-12 col-md-7 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Infirmière" name="choice" id="infirmière" type="radio" />
                    <InputForm classDiv="ps-5 ps-md-3 form-check col-12 col-md-5 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="HSE" name="choice" id="hse" type="radio" />
                    <InputForm classDiv="ps-5 ms-lg-3 ps-md-3 form-check col-12 col-md-7 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="N+1/AM" name="choice" id="n1" type="radio" />
                    <InputForm classDiv="ps-5 ps-md-3 form-check col-12 col-md-5 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="CODIR" name="choice" id="codir" type="radio" />
                    <InputForm classDiv="ps-5 ms-lg-3 ps-md-3 form-check col-12 col-md-6 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="CSSCT" name="choice" id="cssct" type="radio" />
                </div>

                <hr className="w-75 mx-auto my-3" />

                {/* RETOUR AU POSTE */}
                <div className="row text-start">
                    <InputForm classDiv="ps-5 ms-lg-3 ps-md-4 form-check col-12 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Retour au poste" name="retourPoste" id="retourPoste" type="checkbox" />
                    <InputForm classDiv="ps-5 ms-lg-3 ps-md-4 form-check col-12 col-lg-5" classInput="form-check-input" classLabel="txtVert fw-bolder h5" intitule="Travail léger possible" name="travailLeger" id="travailLeger" type="checkbox" />
                </div>
            </div>
        </div>

    );
}

export default FormAccidentInterne4;