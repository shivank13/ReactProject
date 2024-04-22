import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      userInfo :{
        name:"Dummy",
        location:"Default",
      },
    };
  }


  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shivank13")
    const json = await data.json();

    this.setState({
      userInfo:json,
    })
    console.log(json);
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location :{location}</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}

export default User;
