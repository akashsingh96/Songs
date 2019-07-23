import React,{Component} from 'react'
import {connect} from 'react-redux'

class SongList extends Component{
    render(){
        return(
            <div>console.log({this.props.songs})</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        songs:state.songs
    }
}

export default connect(mapStateToProps)(SongList)