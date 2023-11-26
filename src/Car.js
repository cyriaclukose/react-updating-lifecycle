import React from 'react'

class Car extends React.Component {


  constructor(props) {

    super(props);
    this.state = {

      color: "red",
      model: "yaris"
    };

  }

  static getDerivedStateFromProps(props,state) {

    return { color: props.favcolor };
  }

  shouldComponentUpdate(){
    return true;
  }

  render() {

    return (
      <div>
        <p>The color of the car is : {this.state.color} <br />
          The model of the car is :{this.state.model}
        </p>
        <p id="id1"></p>
        <p id="id2"></p>

      </div>

    );
  }

  componentDidMount(){

    setTimeout(()=>{this.setState({model:"corolla"})},3000);

  }

  getSnapshotBeforeUpdate(prevProps, prevState){

    document.getElementById("id1").innerHTML="the model before update : "+prevState.model;

  }

  componentDidUpdate(){
    document.getElementById("id2").innerHTML="the model after update : "+this.state.model;

  }


}

export default Car;