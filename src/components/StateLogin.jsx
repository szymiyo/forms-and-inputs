import {isEmail, isNotEmpty, hasMinLength} from '../util/validation';
import { useInput } from "../hooks/useInput";
import Input from './Input';

export default function Login() {
  const { 
    value: emailValue, 
    handlInputChange: handleEmailChange, 
    handleInputFocus: handleEmailFocus,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputFocus: handlePasswordFocus,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));


  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailFocus}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordFocus}
          value={passwordValue}
          error={passwordHasError  && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
