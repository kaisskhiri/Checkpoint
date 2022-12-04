import React, { Component } from 'react'
import './App.css';
 class Profile extends Component {
   constructor(props)    {
        super(props);   
        this.state = { Person :
             { fullName : "Skhiri Kais" , 
             bio : "Fan de Foot" , 
             pro : "Chargé de Crédit" , 
             imgSrc :"https://sport.tunisienumerique.com/wp-content/uploads/2020/04/coupe-du-monde-2018-rentabilit%C3%A9-tf1.jpg" 
            },
            shows : true,
            i: 0


        };
    }
    change = () => {
       this.setState({shows:!this.state.shows})
    }
    componentDidMount(){
        
            setInterval(() => {this.setState({i:this.state.i+=1})
            },1000)
        
    }
  render() {
    return (
      <div>
     {this.state.shows? <>
        <h1> Bonjour Je suis {this.state.Person.fullName} </h1>
        <h1> Bonjour Je suis {this.state.Person.bio} </h1>
        <h1> Bonjour Je suis {this.state.Person.pro} </h1>
        <img src={this.state.Person.imgSrc}></img></>
        :null}
        <h2>{this.state.i}</h2>
        <button onClick={this.change}> Click Here Please </button>
      </div>
    );
  }
}   
export default Profile ;


