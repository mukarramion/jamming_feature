import React from "react";
import './PlaylistList.css'
class PlaylistList extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.onSelect(this.props.name);
    }
    render(){
        return(
            <li onClick={this.handleClick}>{this.props.name}</li>
        );
    }
}

export default PlaylistList;