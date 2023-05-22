import '../assets/css/inscription.css';
import { React, useState } from 'react';


const SelectForm = (props) => {
    const { classDiv, nomDiv, classLabel, intitule, classDivSelect, classSelect, name, id, aria, tableau, currentUser, status, nameOption } = props;
    let [nbr, setNbr] = useState(0);


    return (
        <div className={classDiv} name={nomDiv}>
            <label className={classLabel}>{intitule}</label>
            <div className={classDivSelect}>

                {(status) &&
                    <select className={classSelect} name={name} id={id} aria-label={aria} disabled>
                        <option value="null" name="null" key="null">--- {intitule} ---</option>

                        {tableau.map(item => {
                            setNbr++;
                            return (
                                <>
                                    {(currentUser && currentUser.id == item.id) &&
                                        <option value={item.id} name={nameOption} key={item.id} id={item.id} selected>{item.acronyme || item.nom + " " + item.prenom || item.nom}</option>
                                    }
                                    {(!currentUser || currentUser.id != item.id) &&
                                        <option value={item.id} name={nameOption} key={item.id} id={item.id}>{item.acronyme || item.nom + " " + item.prenom || item.nom}</option>
                                    }
                                </>
                            )
                        })}
                    </select>
                }

                {(!status || currentUser) &&
                    <>
                        <select className={classSelect} name={name} id={id} aria-label={aria}>
                            <option value="null" name="null" key="null">--- {intitule} ---</option>

                            {tableau.map(item => {
                                setNbr++;
                                return (
                                    <>
                                        {(currentUser && currentUser.id == item.id || currentUser && currentUser.idContrat == item.id || currentUser && currentUser.idService == item.id) &&
                                            <option defaultValue={item} name={nameOption} key={item.id + item.id} id={item.id} selected>{item.acronyme || item.nom}</option>
                                        }
                                        {(!currentUser || currentUser.id != item.id || currentUser.idService == item.id) &&
                                            <option defaultValue={item} name={nameOption} key={item.id} id={item.id}>{item.acronyme || item.nom}</option>
                                        }

                                        {/* {(currentUser && currentUser.idContrat == item.id || currentUser && currentUser.idService == item.id) &&
                                            <option defaultValue={item} name={nameOption} key={item.id} id={item.id} selected>{item.acronyme || item.nom}</option>
                                        }
                                        {(!currentUser || currentUser.idContrat != item.id || currentUser.idService == item.id) &&
                                            <option defaultValue={item} name={nameOption} key={item.id} id={item.id}>{item.acronyme || item.nom}</option>
                                        } */}
                                    </>
                                )
                            })}
                        </select>
                    </>
                }

            </div>
        </div>
    );
}

export default SelectForm;








