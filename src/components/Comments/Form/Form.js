import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{

  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random(200) * Math.floor(500)),
      text: '',
      name: 'Atik',
      editedTxt: ''
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      text: this.props.comment
    });
  }


  postDataHandler = () => {
    const data = {
      id: this.state.id,
      body: this.state.text,
      username: this.state.name + this.state.id
    };

    axios.post('https://my-json-server.typicode.com/fmabid/fake-data/comments', data)
      .then(response => {
        console.log(data)
      });
  };

  handleChange(event) {

    this.setState({
      ...this.state,
      text: event.target.value
    });

  }

  render() {
    //console.log(this.state.editedTxt);
    let form = (
      <form className={["mt-4"].join(' ')}>
        <div className="form-group">
          <label htmlFor="comment">Type Comment:</label>
          <textarea
            className="form-control"
            rows="2"
            value={this.state.text}
            onChange={(event) => this.setState({text: event.target.value})}/>
        </div>
        <button onClick={this.postDataHandler} type="button" className={["btn", "w-100", "btn-dark"].join(' ') }>Send</button>
      </form>
    );

    if (this.props.id) {
      form = (
        <form className={["mt-4"].join(' ')}>  {/*onChange={ () => this.handleChange(this.props.id, this.props.comment) }*/}
          <div className="form-group">
            <textarea
              className="form-control"
              rows="2"
              value={this.props.comment}
              onChange={ () => this.handleChange } />{/*value={this.props.comment} onChange={(event) => this.setState({text: event.target.value})*/}
          </div>
          <button type="button" className={["btn", "w-100", "btn-dark"].join(' ')}>Send</button>
        </form>
      );
    }

    return form;
  }
}

export default Form;