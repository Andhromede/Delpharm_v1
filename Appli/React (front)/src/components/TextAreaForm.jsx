import '../assets/css/inscription.css';


const TextAreaForm = (props) => {
    const { classDiv, classArea, classLabel, intitule, name, nbrRows, placeholder } = props;


    return (
        <div className={classDiv}>
            {(classLabel) && 
                <label className={classLabel}>{intitule}</label>
            }
            <textarea className={classArea} name={name} rows={nbrRows} placeholder={placeholder}/>
        </div>
    );
}

export default TextAreaForm;








