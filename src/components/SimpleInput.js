import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value:enteredName,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    reset:nameReset
  } = useInput((val) => 
    val.trim() !== "");

      const {
        value:enteredEmail,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        valueIsValid: emailIsValid,
        reset:emailReset
      } = useInput((val) => 
        val.trim() !== "" && val.includes('@'));
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

  

    if (!nameIsValid) {
      return;
    }
    emailReset();
    nameReset();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };
  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
