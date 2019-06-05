import API from './index'

export async function fetchNowPlaying(accessToken){
    const data = await API.get('/player',{ headers: {Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}

export async function resumeTrack(accessToken, deviceId, playerOptions = {}){
    let data;
    if(deviceId) {
        data = await API.put(`/player/play?device_id=${deviceId}`, playerOptions, {headers:{Authorization: `Bearer ${accessToken}` }}) 
    } else {
        data = await API.put('/player/play', playerOptions, {headers:{Authorization: `Bearer ${accessToken}` }}) 
    }
    
    return data; 
}

export async function pauseTrack(accessToken){
    const data = await API.put('/player/pause', {}, {headers:{Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}


/*
axios.get('https://api.spotify.com/v1/me/player', { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
*/