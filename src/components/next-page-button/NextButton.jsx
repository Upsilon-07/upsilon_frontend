import PropTypes from "prop-types";
import './nextbuttonstyles.css'
function Button({buttonContent,buttonId,buttonClass,type}){
    return(
        <div className="button-container">
            <button className={`${buttonClass}`} id={`${buttonId}`} type={`${type}`}>{`${buttonContent}`}</button>
        </div>
    )
}

Button.propTypes ={
        buttonContent: PropTypes.string,
        buttonId: PropTypes.string,
        buttonClass: PropTypes.string,
        type: PropTypes.string,
    }
export default Button;