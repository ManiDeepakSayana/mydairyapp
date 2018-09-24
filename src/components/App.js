import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title...."
                  required
                ></input>
              </div>
              <div className="form-group">
                <textarea
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
