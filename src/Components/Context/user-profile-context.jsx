import React from "react";
import {useState,useEffect} from 'react'

const Context = React.createContext()

function UserContextProvider(props){
    return(
        <Context.Provider value={'Bipin koirala'}>
            {props.children}
        </Context.Provider>
    )
}

export {UserContextProvider,Context}