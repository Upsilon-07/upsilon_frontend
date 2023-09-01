import PropTypes from "prop-types";
import './nextbuttonstyles.css'
function Button({buttonContent,buttonId,buttonClass}){
    return(
        <div className="button-container">
            <button className={`${buttonClass}`} id={`${buttonId}`}>{`${buttonContent}`}</button>
        </div>
    )
}

Button.propTypes ={
        buttonContent: PropTypes.string,
        buttonId: PropTypes.string,
        buttonClass: PropTypes.string,
    }
export default Button;