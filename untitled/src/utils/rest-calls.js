import {APP_BASE_URL} from "./consts";

function status(response){
    console.log('response status--' + response.status);
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response)//returnez raspunsul intr-un promise
    }
    else{
        return Promise.reject(new Error(response.statusText))//returnez o eroare
    }
}

function json(response) {
    return response.json()
}

export function GetRaces(){
    var headers = new Headers();
    headers.append('Accept','application/json');
    var myInit = {method:'GET', headers:headers,mode:'cors'};
    var request = new Request(APP_BASE_URL,myInit);

    console.log('before fetch pentru -->' + APP_BASE_URL);

    return fetch(request)
        .then(status)
        .then(json)
        .then(data => {
            console.log('Request succeded with JSON response', data);
            return data;
        })
        .catch(error => {
            console.log('request failed ', error);
            return error;
        });
}

export function DeleteRace(id){
    console.log('before delete fetch')
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var antet = { method: 'DELETE',
        headers: myHeaders,
        mode: 'cors'};

    var raceDelUrl=APP_BASE_URL+'/'+id;

    return fetch(raceDelUrl,antet)
        .then(status)
        .then(response=>{
            console.log('Delete status '+response.status);
            return response.text();
        }).catch(e=>{
            console.log('error '+e);
            return Promise.reject(e);
        });

}


export function AddRace(race){
    console.log('before add fetch'+JSON.stringify(race));

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type","application/json");

    var antet = { method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(race)};

    return fetch(APP_BASE_URL,antet)
        .then(status)
        .then(response=>{
            return response.text();
        }).catch(error=>{
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}

