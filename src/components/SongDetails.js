import React,{Component} from 'react'
import { connect } from 'react-redux';

class SongDetails extends Component{
    render(){

        console.log(this.props)
        const {title,duration}=this.props.song
        return(
            <div>
                <h3>Details:</h3>
                <p>{title}</p>
                <br/>
                <p>{duration}</p>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {song:state.selectedSong}
}
export default connect(mapStateToProps)(SongDetails)