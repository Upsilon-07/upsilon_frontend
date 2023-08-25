import PropTypes from "prop-types";
import './nextbuttonstyles.css'
function Button({data}){
    return(
        <div className="button-card">
            <button className="button" id={`${data.buttonId}`}>{`${data.buttonContent}`}</button>
        </div>
    )
}

Button.propTypes ={
    data: PropTypes.shape({
        buttonContent: PropTypes.string,
        buttonId: PropTypes.string,
    })
}
export default Button;