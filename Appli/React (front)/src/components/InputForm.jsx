import '../assets/css/inscription.css';


const LogForm = (props) => {
    const {classDiv, classDivInput, classInput, classLabel, intitule, id, name, type, handleFunction, onKeyUp, nomDiv, placeholder,status, defaultValue} = props;


    return (

        <div className={classDiv} name={nomDiv}>
            {(classLabel) && 
                <label className={classLabel}>{intitule}</label>
            }

            {(status) &&
               <> 
                    {(classDivInput) && 
                        <div className={classDivInput}>
                            <input className={classInput} type={type} id={id} name={name} onClick={handleFunction} placeholder={placeholder} defaultValue={defaultValue} disabled />
                        </div> 
                    }

                    {(!classDivInput) && 
                        <input className={classInput} type={type} id={id} name={name} onClick={handleFunction} placeholder={placeholder} onKeyUp={onKeyUp} defaultValue={defaultValue} disabled/>
                    }
                </>
            }  

            {(!status) &&
               <> 
                    {(classDivInput) && 
                        <div className={classDivInput}>
                            <input className={classInput} type={type} id={id} name={name} onClick={handleFunction} placeholder={placeholder} defaultValue={defaultValue}/>
                        </div> 
                    }

                    {(!classDivInput) && 
                        <input className={classInput} type={type} id={id} name={name} onClick={handleFunction} placeholder={placeholder} onKeyUp={onKeyUp} defaultValue={defaultValue}/>
                    }
                </>
            }  
        </div>


    );
}

export default LogForm;








