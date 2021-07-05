import React, { Component } from "react";

export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div style={{ marginTop: "10px" }}>
        <button className="button"
        style={{borderRadius:'5px',
         background:'#042f54',
         color:'white'
        ,minWidth:'140px',
        maxWidth:'140px',
        fontSize:'16px',
        border:'0px',
        minHeight:'35px'
        }}
         onClick={this.props.submit} 
         disabled={this.props.isLoad}>
          {this.props.isLoad && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {this.props.isLoad && <span>{this.props.titleLoad}</span>}
          {!this.props.isLoad && <span>{this.props.title} </span>}
        </button>
      </div>
    );
  }
}
