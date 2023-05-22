import '../assets/css/inscription.css';
import { Link } from 'react-router-dom';
import InputForm from '../components/InputForm';
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const LogForm = (props) => {
    const { page } = props;
    const { setAuth, auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const password = document.querySelector('[name="password"]').value;

        if (page === "Inscription") {
            document.querySelector('[name="confirmPassword"]')?.classList.remove("is-invalid");
            document.querySelector('[name="password"]')?.classList.remove("is-invalid");
            const passwordConfirm = document.querySelector('[name="confirmPassword"]')?.value;

            if (!password) {
                document.querySelector('[name="password"]')?.classList.add("is-invalid");
                console.log("mots de passe obligatoire !");
            }
            else if (!passwordConfirm) {
                document.querySelector('[name="confirmPassword"]')?.classList.add("is-invalid");
                console.log(("Confirmation de mdp obligatoire !"));
            }
            else if (passwordConfirm && password !== passwordConfirm) {
                document.querySelector('[name="confirmPassword"]')?.classList.add("is-invalid");
                document.querySelector('[name="password"]')?.classList.add("is-invalid");
                console.log("mots de passe différents !");
            }
            else {
                document.querySelector('[name="confirmPassword"]')?.classList.remove("is-invalid");
                document.querySelector('[name="password"]')?.classList.remove("is-invalid");

                delete jsonData.confirmPassword;
                let bodyJson = JSON.stringify(jsonData);
                console.log(bodyJson);

                fetch(`https://localhost:7027/api/security/inscription`, {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: bodyJson

                }).then((resp) => resp.text())
                    .then((text) => {
                        const data = text.toJson();
                    });
            }
        }


        if (page === "Connexion") {
            document.querySelector('[name="password"]')?.classList.remove("is-invalid");

            if (!password) {
                document.querySelector('[name="password"]')?.classList.add("is-invalid");
            }
            else {
                document.querySelector('[name="password"]')?.classList.remove("is-invalid");
                let bodyJson = JSON.stringify(jsonData);
                // console.log(bodyJson);


                fetch(`https://localhost:7027/api/security/connexion`, {
                    method: "post",
                    headers: { "content-type": "application/json" },
                    body: bodyJson

                }).then((resp) => resp.text())
                    .then((text) => {
                        const data = text.toJson();
                        console.log(data.result);

                        if (data.result) {
                            document.cookie = `auth=${data.token};max-age=${60 * 60 * 24}`;
                            setAuth({ role: data.role, id: data.id });
                            navigate("/accueil");
                        }
                        else {
                            document.cookie = `auth=null;max-age=0`;
                            setAuth({ role: 0, id: data.id });
                            navigate("/connexion");
                        }
                    });
            }
        }
    }

    return (
        <form className="container-fluid body" onSubmit={handleSubmit}>
            {/* <section className="overflow-hidden"> */}
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">

                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 zIndex">
                        <h1 className="my-5 display-5 fw-bold ls-tight color2">
                            {page} <br />
                            {/* <span className="color2">Déclaration</span> */}
                        </h1>

                        {(page === "Inscription") &&
                            <p className="mb-4 opacity-70 color3 text-white">
                                Bienvenu sur le formulaire d'inscription.
                            </p>
                        }
                    </div>


                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        {/* <div className="px-4 px-md-3 circleSize bg-glass my-3 mx-auto border-radius"> */}

                        <div className="px-4 px-md-3 py-md-5 circleSize bg-glass my-3 mx-auto border-radius">
                            <div className="card-body px-4 py-4 py-md-0 px-md-5">
                                <div className="mx-auto text-center">

                                    {(page === "Inscription") &&
                                        <div className="row">
                                            <InputForm classDiv="form-outline mb-4 pt-3 pt-md-0 col-5 col-md-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule" name="matricule" id="matricule" type="text" />

                                            <div className="form-outline mb-4 col-5 pt-3 pt-md-0 col-md-6 mx-auto inputCo">
                                                <label className="form-label fw-bold txtVert">Service</label>
                                                <select className="form-select" name="idService" id="idService" aria-label="Default select example">
                                                    <option value="1" name="1" key="uap">UAP Base</option>
                                                    <option value="2" name="2" key="ha">UAP HA</option>
                                                    <option value="3" name="3" key="hs">UAP HS</option>
                                                    <option value="4" name="4" key="mp">MP</option>
                                                    <option value="5" name="5" key="mg">MG</option>
                                                </select>
                                            </div>
                                        </div>
                                    }

                                    {(page === "Inscription") &&
                                        <div className="row">
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Nom" name="nom" id="nom" type="text" />
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Prenom" name="prenom" id="prenom" type="text" />
                                        </div>
                                    }

                                    {(page === "Connexion") &&
                                        <div className="row mb-4 mt-4 pt-5 pt-md-4">
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule" name="matricule" id="matricule" type="text" />
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Password" name="password" id="password" type="password" />
                                        </div>
                                    }

                                    {(page === "Inscription") &&
                                        <div className="row mb-3">
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Password" name="password" id="password" type="password" required />
                                            <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="ConfirmPassword" name="confirmPassword" id="confirmPassword" type="password" required />
                                        </div>
                                    }

                                    <div className="row">
                                        {(page === "Inscription") &&
                                            <button type="submit" className="btn bgVert text-light btn-block mb-4 mx-auto col-4 buttonCo">
                                                Inscription
                                            </button>
                                        }

                                        {(page === "Connexion") &&
                                            <button type="submit" className="btn bgVert text-light btn-block mb-4 mx-auto col-4 buttonCo">
                                                Connexion
                                            </button>
                                        }

                                        {(page === "Inscription") &&
                                            <div>
                                                <span className="text fw-bold">Déjà inscrit ?  </span>
                                                <Link className="text-warning" to={"/connexion"}>Se connecter</Link>
                                            </div>
                                        }

                                        {(page === "Connexion") &&
                                            <div className="txtCourbe">
                                                <span className="text fw-bold">Pas encore inscrit ? C'est </span>
                                                <Link className="text-warning" to={"/inscription"}>Par ici</Link>
                                            </div>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </form>
    );

}

export default LogForm;








