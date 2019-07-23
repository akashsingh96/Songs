//Action Creator
export const selectSong=()=>{
    //returns an action
    return(
        {
            type:'SELECTED_SONG',
            payload:song
        }
    ) 
}