import React, { useContext, useEffect, useState } from "react";
import "../assets/css/pqasd.css";
import { ProgressBar } from "react-bootstrap";
import { IoIosSave, IoIosAddCircle } from "react-icons/io";
import { TiWarningOutline } from "react-icons/ti";
import InputForm from "../components/InputForm";
import TextAreaForm from "./TextAreaForm";
import { AuthContext } from "../contexts/AuthContext";

const SelectAutoComplete = (props) => {
    const { classDiv, nameDiv, classSelect, nameSelect, idSelect, ariaLabel, nameOption, tableau, idOption, textOption, fonction } = props;

    return (
        <>
            <div className={classDiv} name={nameDiv}>
                <select className={classSelect} name={nameSelect} id={idSelect} aria-label={ariaLabel} onChange={fonction}>
                    <option value="" id={nameSelect} name={nameOption} key="null">--- {tableau.length} Utilisateurs ---</option>

                    {tableau.map(item => {
                        return (
                            <>
                                {(textOption == "nom + prenom") &&
                                    <option value={item.id} id={idOption} name={item.id} key={item.id}>{item.nom + " " + item.prenom}</option>
                                }
                                {(textOption == "prenom + nom") &&
                                    <option value={item.id} id={idOption} name={item.id} key={item.id}>{item.prenom + " " + item.nom}</option>
                                }
                                {(textOption == "matricule") &&
                                    <option value={item.id} id={idOption} name={item.id} key={item.id}>{item.matricule}</option>
                                }
                            </>
                        )
                    })}
                </select>
            </div>

        </>
    );
};

export default SelectAutoComplete;
