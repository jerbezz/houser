import {createStore} from 'redux'

const initialState = {
    house_name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    house_img: '',
    mortgage: '',
    rent: ''
}

export const UPDATE_HOUSE_NAME = 'UPDATE_HOUSE_NAME';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_ZIP = 'UPDATE_ZIP';
export const UPDATE_HOUSE_IMG = 'UPDATE_HOUSE_IMG';
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
export const UPDATE_RENT = 'UPDATE_RENT';
// export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS';
// export const ADD_RECIPES = 'ADD_RECIPES'


function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_HOUSE_NAME:
            return {...state, house_name: payload}
        case UPDATE_ADDRESS:
            return { ...state, address: payload}
        case UPDATE_CITY:
            return {...state, city: payload}
        case UPDATE_STATE:
            return {...state, state: payload}
        case UPDATE_ZIP:
            return {...state, zip: payload}
        case UPDATE_HOUSE_IMG:
            return {...state, house_img: payload}
        case UPDATE_MORTGAGE:
            return {...state, mortgage: payload}
        case UPDATE_RENT:
            return {...state, rent: payload}
        // case ADD_INSTRUCTIONS:
        //     const newInstructions = [...state.instructions, payload]
        //     return {...state, instructions: newInstructions}
        // case ADD_RECIPES:
        //     const {name, category, authorFirst, authorLast, ingredients, instructions} = state;
        //     const recipe = {name, category, authorFirst, authorLast, ingredients, instructions};
        //     const newRecipes = [...state.recipes, recipe]
        //     return {...state, recipes: newRecipes}

        default:
            return state;
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

