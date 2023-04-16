import { combineReducers, configureStore } from "@reduxjs/toolkit";
import translateState from "./translateState";



export default configureStore({reducer:translateState})