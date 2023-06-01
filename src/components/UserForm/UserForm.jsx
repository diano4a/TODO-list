import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../../redux/actions';

const UserForm = ({ username, setUsername, onNextClick }) => {
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="name">Впишите свое имя:</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={username} 
          onChange={handleInputChange}
          placeholder="Имя"/>
      </div>

      <button onClick={handleNextClick}>Дальше</button>
    </div>
  );
};

const mapStateProps = (state) => ({
  username: state.username,
});

export default connect(mapStateProps, { setUsername })(UserForm);