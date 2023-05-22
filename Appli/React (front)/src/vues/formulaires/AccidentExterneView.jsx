import { useState } from 'react';
import '../../assets/css/accidentInternAndExtern.css';

import FormAccident1 from '../../components/formulaires/FormAccident1';
import FormAccident2 from '../../components/formulaires/FormAccident2';
import FormAccident3 from '../../components/formulaires/FormAccident3';
import FormAccident5 from '../../components/formulaires/FormAccident5';
import FormAccident7 from '../../components/formulaires/FormAccident7';
import { ProgressBar } from 'react-bootstrap';
import { IoIosSave } from 'react-icons/io';




const AccidentExterneView = (props) => {
    const { page } = props;
    let [currentQuestion, setCurrentQuestion] = useState(1);
    const [tableauUsers, setTableauUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();


    /********** FONCTION : SOUMISSION DE FORMULAIRE **********/
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // TODO fonction de soumission de formulaire
    }


    /********** FONCTION : SLIDE PRECEDENTE **********/
    const previousQuestion = (evt) => {
        evt.preventDefault();

        if (currentQuestion >= 2) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }


    /********** FONCTION : SLIDE SUIVANTE **********/
    const nextQuestion = (evt) => {
        evt.preventDefault();

        if (currentQuestion <= 4) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }


    /********** FONCTION : AUTOCOMPLETION **********/
    const getUser = (evt) => {
        if (tableauUsers) {
            tableauUsers.map(item => {
                if (item.id == evt.target.value) {
                    setCurrentUser(item);
                    let inputTelephone = document.querySelector('[name="Telephone"]');

                    document.querySelector('[name="Name"]').value = item.nom;
                    document.querySelector('[name="FirstName"]').value = item.prenom;
                    document.querySelector('[name="Matricule"]').value = item.matricule;

                    if (inputTelephone) {
                        inputTelephone.value = item.telephone;
                    }

                    evt.target.closest('.selectDiv').classList.add("d-none");
                }
            });
        }
    }


    /********** FONCTION : RECHERCHES INSTANTANEES **********/
    const onKeyUp = (evt) => {
        let selectUserMatricule = document.querySelector('[name="selectUserMatricule"]');
        let selectUserName = document.querySelector('[name="selectUserName"]');
        let selectUserFirstname = document.querySelector('[name="selectUserFirstname"]');

        let value = evt.currentTarget.value;
        let name = evt.currentTarget.name;

        selectUserMatricule.classList.add("d-none");
        selectUserName.classList.add("d-none");
        selectUserFirstname.classList.add("d-none");

        if (value != "") {
            let formData = new FormData();

            if (name == "Matricule") {
                formData.matricule = value;
                selectUserMatricule.classList.remove("d-none");
            }
            if (name == "Name") {
                formData.nom = value;
                selectUserName.classList.remove("d-none");
            }
            if (name == "FirstName") {
                formData.prenom = value;
                selectUserFirstname.classList.remove("d-none");
            }

            const bodyJson = JSON.stringify(formData);

            fetch(`https://localhost:7027/api/Utilisateur/FindUserBy${name}`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: bodyJson
            }).then((resp) => resp.text())
                .then((text) => {
                    const data = text.toJson();
                    setTableauUsers(data);
                }).catch(console.log());
        }
    }


    return (
        // Le formulaire est en plusieurs partie : le titre et la progressbar / le bouton précédent / le questionnaire / le bouton suivant.
        
        <form className="container-fluid my-5" name="section1" onSubmit={handleSubmit}>
            <div className="mx-auto text-center row">

                {/* TITRE */}
                {(currentQuestion <= 1) &&
                    <>
                        <h1 className="text-light mb-3 ">VICTIME</h1>
                        <div className="progressBar">
                            <ProgressBar animated className='w-50 mx-auto my-5' now={20} label={`1 / 5`} striped variant="danger" />
                        </div>
                    </>
                }
                {(currentQuestion === 2) &&
                    <>
                        <h1 className="text-light mb-3 ">HIERARCHIQUE</h1>
                        <div className="progressBar ">
                            <ProgressBar animated className='w-50 mx-auto my-5' now={40} label={`2 / 5`} striped variant="danger" />
                        </div>
                    </>
                }
                {(currentQuestion === 3) &&
                    <>
                        <h1 className="text-light mb-3 ">1ERE PERSONNE PREVENUE AU SIEGE</h1>
                        <div className="progressBar ">
                            <ProgressBar animated className='w-50 mx-auto my-5' now={60} label={`3 / 5`} striped variant="warning" />
                        </div>
                    </>
                }
                {(currentQuestion === 4) &&
                    <>
                        <h1 className="text-light mb-3 ">ACCIDENT</h1>
                        <div className="progressBar ">
                            <ProgressBar animated className='w-50 mx-auto my-5' now={80} label={`4 / 5`} striped variant="warning" />
                        </div>
                    </>
                }
                {(currentQuestion === 5) &&
                    <>
                        <h1 className="text-light mb-3 ">ACCIDENT</h1>
                        <div className="progressBar ">
                            <ProgressBar animated className='w-50 mx-auto my-5' now={100} label={`5 / 5`} striped variant="success" />
                        </div>
                    </>
                }


                {/* BOUTON PRECEDENT */}
                <div className="col-10 col-sm-3 mx-auto my-3  my-auto">
                    {(currentQuestion > 1) &&
                        <button className="btn bg-danger text-light btn-block mb-4 mx-auto col-8 col-sm-3 radius50 bouton bounce-in-left" onClick={previousQuestion}>
                            Précédent <IoIosSave />
                        </button>
                    }
                </div>


                {/* SECTION QUESTIONS (corps du formulaire) */}
                {(currentQuestion <= 1) &&
                    <FormAccident1 page="externe" onKeyUp={onKeyUp} getUser={getUser} currentUser={currentUser} tableauUsers={tableauUsers}/>
                }
                {(currentQuestion === 2) &&
                    <FormAccident2 page="externe" onKeyUp={onKeyUp} getUser={getUser} currentUser={currentUser} tableauUsers={tableauUsers}/>
                }
                {(currentQuestion === 3) &&
                    <FormAccident3 page="externe" />
                }
                {(currentQuestion === 4) &&
                    <FormAccident5 page="externe" />
                }
                {(currentQuestion === 5) &&
                    <FormAccident7 page="externe" />
                }


                {/* BOUTON SUIVANT */}
                <div className="col-10 col-sm-3 mx-auto my-auto my-3">
                    {(currentQuestion < 5) &&
                        <button className="btn bg-warning text-dark btn-block mb-4 mx-auto col-8 col-sm-3 radius50 bouton bounce-in-right" onClick={nextQuestion}>
                            Suivant <IoIosSave />
                        </button>
                    }
                    {(currentQuestion == 5) &&
                        <button className="btn bg-warning text-dark btn-block mb-4 mx-auto col-8 col-sm-3 radius50 bouton bounce-in-right" onClick={nextQuestion}>
                            Terminer <IoIosSave />
                        </button>
                    }
                </div>
            </div>
        </form>
    );
}


export default AccidentExterneView;
