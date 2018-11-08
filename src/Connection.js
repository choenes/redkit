import React, { Component } from 'react';

class Connection extends Component {
  constructor(props){
    super(props);
    this.state = {
      connection: props.connection ? props.connection : {}
    };
    this.tryConnect = this.tryConnect.bind(this);
  }

  tryConnect() {
      // todo: replace this with real connection logic
      this.state.connection.busy = true;
      this.state.connection.error = false;
      this.setState({connection: this.state.connection});

      setTimeout(() => {
        this.state.connection.busy = false;
        this.state.connection.error = true;
        this.setState({connection: this.state.connection});
      }, 3000);
  }

  render() {
    const disabled = this.state.connection.busy ? 'disabled' : '';
    const buttonClasses = `ui primary button ${disabled}`;
    return (<div>
            <form className="ui attached form segment">
            <div className="two fields">
              <div className="field">
                <label>Database Host</label>
                <div className="ui left labeled input">
                  <input type="text" placeholder="example-cluster.redshift.amazonaws.com"/>
                </div>
              </div>
              <div className="field">
                <label>Database Port</label>
                <div className="ui left labeled input">
                  <input type="text" placeholder="5439"/>
                </div>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Enter your user</label>
                <div className="ui left labeled input">
                  <input type="text" placeholder="User"/>
                </div>
              </div>
              <div className="field">
                <label>Enter your password</label>
                <div className="ui left labeled icon input">
                  <input type="password" placeholder="Password"/>
                  <i className="lock icon"></i>
                </div>
              </div>
            </div>

            <button type="button" className={buttonClasses} role="button" onClick={this.tryConnect}>
              {this.state.connection.busy ?
                <span><i className="refresh icon loading"></i>Connecting...</span>
              : <span>Connect</span>}
            </button>
          </form>

          {this.state.connection.error ?
          <div className="ui bottom attached error message">
            <i className="icon warning"></i> Unable to connect to database.
          </div>
          : null}

        </div>);
  }
}

export default Connection;
