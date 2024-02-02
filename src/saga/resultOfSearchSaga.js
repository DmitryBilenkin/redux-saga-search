import { put, debounce } from "redux-saga/effects";
import { getData, asyncGetFetchAPI, emptyField } from "../state/resultOfSearchSlice";

export function* workerGetFetchAPI(action){
    try{
        if(action.payload === ''){
            return yield put(emptyField());
        }

        const params = yield new URLSearchParams({q: action.payload});
        const resp = yield fetch(`http://localhost:7070/api/search?${params}`)
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        const data = yield resp.json();
        yield put(getData(data));

    }catch(e){
        console.error(e)
    };
};

export function* watcherResultOfSearch (){
   yield debounce (400, asyncGetFetchAPI.type, workerGetFetchAPI);
}