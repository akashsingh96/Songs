import React,{Component} from 'react'
import {connect} from 'react-redux'

class SongList extends Component{
    renderList(){
        return this.props.songs.map(song=>{
                return(
                    <div className='item' key={song.title} >
                        <div className='right floated content'>
                            <button className='ui primary button'>Select</button>
                        </div>
                        <div className='content'>
                            {song.title}
                        </div>
                    </div>
                )
            })
        }
    render(){
        return <div className='ui divided list'>{this.renderList()}</div>//Here will have to invoke the function
    }
}

const mapStateToProps=(state)=>{
    return {songs:state.songs}
}

export default connect(mapStateToProps)(SongList)