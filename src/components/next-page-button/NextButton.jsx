import PropTypes from "prop-types";
import './nextbuttonstyles.css'
function NextButton({journeyData}){
    return(
        <div className="button">
            <button>{`${journeyData.buttonContent}`}</button>
        </div>
    )
}

NextButton.propTypes ={
    journeyData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        buttonContent: PropTypes.string,
    })
}
export default NextButton;