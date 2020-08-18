import Hangman from "./Hangman"
import React, { Component } from 'react';
import axios from "axios";
class Words extends Component {
	state = { fetchData : ""
}

	componentDidMount(){
		const r=Math.floor(Math.random()*5);
		console.log(this.props.match.params.end);
		axios.get( `https://my-json-server.typicode.com/aaryan-rawat-au8/mockjson/${this.props.match.params.end}`).then(res=>this.setState({fetchData:res.data[r].item})).catch(err=>console.log(err));
		// const len=this.state.fetchData.length;
		
		// console.log(typeof(this.state.fetchData[0].item));
	    // this.setState({sword:this.state.fetchData.item});

	}
	render() {
		console.log(this.state.fetchData);
		return (
			<div><Hangman rword={this.state.fetchData}/></div>
			
		);
	}
}

export default Words;
