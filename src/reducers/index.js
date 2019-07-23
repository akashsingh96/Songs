import {combineReducers} from 'redux'

export const songReducer=()=>{
    return[
            {title:'aqkjbsbfj',duration:3.06},
            {title:'ashwudfyvbnio',duration:5.08},
            {title:'shbgv',duration:4.07},
            {title:'suwgd',duration:2.00}
        ]
}

export const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SELECTED_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})