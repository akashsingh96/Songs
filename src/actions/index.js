//Action Creator
export const selectSong=(song)=>{
    //returns an action
    return(
        {
            type:'SELECTED_SONG',
            payload:song
        }
    ) 
}