
import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducers } from "./reducers";

const composedEnhancer =composeWithDevTools(applyMiddleware(thunk));
export const configureStore =(preState)=>{
    const store =createStore(rootReducers(),preState,composedEnhancer)
    return{
        store:store,    
    }
}