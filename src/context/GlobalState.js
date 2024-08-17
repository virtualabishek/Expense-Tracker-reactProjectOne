import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ] 
}

//Create contents

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({childeren}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {childeren}
        </GlobalContext.Provider>
        )

}
