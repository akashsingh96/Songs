import {combineReducers} from 'redux'

const songReducer=()=>{
    return[
            {title:'Stairway to Heaven',duration:3.06},
            {title:'Hotel California',duration:5.08},
            {title:'All I Want',duration:4.07},
            {title:'High Hopes',duration:2.00}
        ]
}

const selectedSongReducer=(selectedSong=[],action)=>{
    if(action.type==='SELECTED_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})