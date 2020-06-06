import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const { name, email, phone, message } = this.state;
    return (
      <form action={this.props.formLink} method="POST">
        <input
          aria-label="Name"
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={this.handleChange}
          value={name}
        />
        <input
          aria-label="Email"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={this.handleChange}
          value={email}
        />
        <input
          aria-label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={this.handleChange}
          value={phone}
        />
        <textarea
          aria-label="Message"
          name="message"
          placeholder="Message"
          required
          onChange={this.handleChange}
          value={message}
        ></textarea>

        <input
          aria-label="Submit"
          type="submit"
          value="Send"
          className="z-depth-3"
        />
      </form>
    );
  }
}

export default ContactForm;
