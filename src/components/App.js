import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      notes: {}
    }
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentDidMount() {
    database.on('value', (snapshot) => {
      this.setState({
        notes: snapshot.val()
      });
    });
  }

  handleChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(note);
    this.setState({
      title: '',
      body: ''
    });
  }
  
  renderNotes(){
    return _.map(this.state.notes,(note,key) =>{
      return  (
        <div className="row" key="key">
          <h6>{note.title}</h6>
          <p>{note.body}</p>
        </div>
      )
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="container-fluid">      
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChanges}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title...."
                  required
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChanges}
                  value={this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body Text..."
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12"> Submit </button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
