import {SIGN_IN, SIGN_UP, ADD_INGREDIENT, REMOVE_INGREDIENT, EDIT_INGREDIENT, FAVORITE_RECIPE, ADD_PAYMENT, REMOVE_PAYMENT} from './actions'

function userState(state, action) {
    switch (action.type) {
        case SIGN_IN:
            return action.response;
        case SIGN_UP:
            return action.response;
    }
}

function ingredients(state = [], action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [...state,
                {
                    "name": action.ingredient.name,
                    "price": action.ingredient.price,
                    "amount": action.ingredient.amount,
                    "unit": action.ingredient.unit,
                    "category": action.ingredient.category,
                    "purchaseTime": action.ingredient.purchaseTime,
                    "expiration": action.ingredient.expiration,
                }
            ];
        case REMOVE_INGREDIENT:
            return state.filter(function(value){
                return value !== action.ingredient;
            });
        case EDIT_INGREDIENT:
            const newState = [...state];
            newState[newState.indexOf(action.oldIngredient)] = action.newIngredient;
            return newState;
    }
}

function recipes(favorite_recipes, action) {
    switch (action.type) {
        case FAVORITE_RECIPE:
    }
}
