import './UserName.css'
import PropTypes from 'prop-types';

const UserName = ({ value }) => {


  return (
    <>
    <div>
        <h1 className="homepage-title1">Namaste,</h1>
        </div>
    <div className="homepage-title2">
      {value}
    </div>
    </>
  );
};

UserName.propTypes = {
  value: PropTypes.string,
};


export default UserName


