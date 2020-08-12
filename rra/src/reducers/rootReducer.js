import React from 'react';
import {FETCH_PICS_START,
FETCH_PICS_SUCCESS,
FETCH_PICS_FAIL} from '../actions';


const initialState = {
    pics:[],
    err:'',
    isFetching:false
}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type){

        case FETCH_PICS_START:
            return{
                ...state,
                err: '',
                isFetching:true
            };
        case FETCH_PICS_SUCCESS:
            return{
                ...state,
                pics:[action.payload],
                err: '',
                isFetching:false
            };
        case FETCH_PICS_FAIL:
            return{
                ...state,
                err:'error',
                isFetchhing:false
            }

    }



     return state
} 
 