import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
    };
  }

  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length > 3 ? "" : "Username must be atleast 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length > 5 ? "" : "Password must be atleast 6 characters";
        break;
      case "password2":
        errors.password2 =
          this.state.password === value
            ? ""
            : "Password2 is required to be same";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = () => {
    alert(this.state.email + " " + this.state.password);
  };

  render() {
    let { username, email, password, password2 } = this.state.errors;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Register With Us</h1>
          <label htmlFor="user">Username: </label>
          <input
            type="text"
            id="user"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Enter Username"
            className={username && "error"}
          />
          <span>{username}</span>
          <label htmlFor="user">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="Enter Email"
            className={email && "error"}
          />
          <span>{email}</span>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            placeholder="Enter Password"
            className={password && "error"}
          />
          <span>{password}</span>
          <label htmlFor="password">Confirm Password: </label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={this.state.password2}
            onChange={this.handleInput}
            placeholder="Enter Password again"
            className={password2 && "error"}
          />
          <span>{password2}</span>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Validation;
