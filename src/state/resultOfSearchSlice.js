import { createSlice } from "@reduxjs/toolkit"

const resultOfSearchSlice = createSlice({
    name: 'resultOfSearchSlice',
    initialState:{
        currValueOfSearch: '',
        loading: false,
        data: [],
        messageEmptyField: 'Type something to search...'
    },
    reducers:{
        getData(state, acion){
            state.data = acion.payload
            state.loading = false
        },
        asyncGetFetchAPI(state, acion){
            state.currValueOfSearch = acion.payload
            state.loading = true
            state.messageEmptyField = ''
        },
        emptyField(state){
                state.messageEmptyField = 'Type something to search...'
                state.loading = false
                state.data=[]
        }
    }
});

export const { getData, asyncGetFetchAPI, emptyField } = resultOfSearchSlice.actions;
export default resultOfSearchSlice.reducer;
