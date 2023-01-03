/// moje cwiczenie

import useValidation from "../hooks/use-validation";
const BasicForm = (props) => {
  const {
    valueChangeHandler: nameChangeHandler,
    valueOnblurHandler: nameOnblurHandler,
    valueHasError: nameHasError,
    enteredValue: enteredName,
    reset: resetName,
    isValid: nameIsValid,
  } = useValidation((value) => value.trim() !== "");

  const {
    valueChangeHandler: lastNameChangeHandler,
    valueOnblurHandler: lastNameOnblurHandler,
    valueHasError: lastNameHasError,
    enteredValue: enteredLastName,
    reset: resetLastName,
    isValid: lastNameIsValid,
  } = useValidation((value) => value.trim() !== "");

  const {
    valueChangeHandler: emailChangeHandler,
    valueOnblurHandler: emailOnblurHandler,
    valueHasError: emailHasError,
    enteredValue: enteredEmail,
    reset: resetEmail,
    isValid: emailIsValid,
  } = useValidation((value) => value.includes("@"));

  const nameErrorClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameErrorClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailErrorClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  let isFormValid = false;
  if (nameIsValid && lastNameIsValid & emailIsValid) {
    isFormValid = true;
  }
  const onConfirmForm = (event) => {
    event.preventDefault();
    resetName();
    resetLastName();
    resetEmail();
  };
  return (
    <form onSubmit={onConfirmForm}>
      <div className="control-group">
        <div className={nameErrorClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={enteredName}
            onBlur={nameOnblurHandler}
          />
          {nameHasError && (
            <p className="error-text">Firts Name can't be empty</p>
          )}
        </div>
        <div className={lastNameErrorClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            value={enteredLastName}
            onBlur={lastNameOnblurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name can't be empty</p>
          )}
        </div>
      </div>
      <div className={emailErrorClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailOnblurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
