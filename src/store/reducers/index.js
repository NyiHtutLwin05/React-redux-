import { combineReducers } from "redux"
import userReducer from "./userReducer"

export const rootReducers =()=>{
    
   return combineReducers({
        user:userReducer,
    })}