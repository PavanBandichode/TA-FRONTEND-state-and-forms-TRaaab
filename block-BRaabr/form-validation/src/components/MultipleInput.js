import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      date: "",
      readOnly: "",
      textarea: "",
    };
    this.fileInput = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="text">Text Input: </label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <label htmlFor="date">Date Input: </label>
          <input
            type="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <label htmlFor="file">File Input: </label>
          <input type="file" ref={this.fileInput} />
          <label htmlFor="text">Read-Only Input: </label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="This can only be copied"
            readOnly
          />
          <label htmlFor="text">Disabled Input: </label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            disabled
          />
          <label htmlFor="text">TextArea: </label>
          <textarea
            onChange={this.handleChange}
            value={this.state.textarea}
            rows="3"
          />
          <label htmlFor="text">TextArea Disabled: </label>
          <textarea
            onChange={this.handleChange}
            value={this.state.textarea}
            rows="3"
            disabled
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default MultipleInput;
