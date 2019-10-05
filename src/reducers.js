import cloneDeep from 'lodash/cloneDeep';
import {
    SIGN_IN,
    SIGN_UP,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    EDIT_INGREDIENT,
    ADD_PAYMENT,
    REMOVE_PAYMENT,
    FAVORITE_RECIPE,
    UNFAVORITE_RECIPE,
    CACHE_RECIPE
} from './actions'

const initialState = {};

function userState(state, action) {
    switch (action.type) {
        case SIGN_IN:
            return action.response;
        case SIGN_UP:
            return action.response;
    }
}

function ingredients(state = initialState, action) {
    // Don't deep copy the whole thing to save memory, only deep copy what you need, old references can stay
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_INGREDIENT:
            newState.ingredients = [...newState.ingredients,
                {
                    "UUID": action.ingredients.UUID,
                    "name": action.ingredient.name,
                    "price": action.ingredient.price,
                    "amount": action.ingredient.amount,
                    "unit": action.ingredient.unit,
                    "category": action.ingredient.category,
                    "purchaseTime": action.ingredient.purchaseTime,
                    "expiration": action.ingredient.expiration,
                }
            ];
            return newState;
        case REMOVE_INGREDIENT:
            newState.ingredients = cloneDeep(state.ingredients);
            for (let i = 0; i < newState.ingredients.length; i++) {
                if (newState.ingredients[i].UUID === action.ingredient.UUID) {
                    newState.ingredients.splice(i, 1);
                    return newState;
                }
            }
            // In case the UUID wasn't found
            return newState;
        case EDIT_INGREDIENT:
            newState.ingredients = cloneDeep(state.ingredients);
            for (let i = 0; i < newState.ingredients.length; i++) {
                if (newState.ingredients[i].UUID === action.oldIngredient.UUID) {
                    newState.ingredients[i] = action.newIngredient;
                    return newState;
                }
            }
            // In case the UUID wasn't found
            return newState
    }
}

function recipes(state, action) {
    // Don't deep copy the whole thing to save memory, only deep copy what you need, old references can stay
    let newState = Object.assign({}, state);
    switch (action.type) {
        case FAVORITE_RECIPE:
            if (!newState.saved_recipes.includes(action.recipe)) {
                newState.saved_recipes = [...newState.saved_recipes, action.recipe.UUID];
                newState.cached_recipes = [...newState.cached_recipes, action.recipe];
                return newState;
            } else {
                return newState;
            }
        case UNFAVORITE_RECIPE:
            if (!newState.saved_recipes.includes(action.recipe)) {
                return newState;
            } else {
                newState.cached_recipes = deepCopy(state.cached_recipes);
                newState.saved_recipes = deepCopy(state.saved_recipes);
                for (let i = 0; i < newState.cached_recipes.length; i++) {
                    if (newState.cached_recipes[i].UUID === action.recipe.UUID) {
                        newState.cached_recipes.splice(i, 1);
                    }
                }

                newState.saved_recipes.splice(newState.saved_recipes.indexOf(action.recipe.UUID), 1);

                return newState;
            }
        case CACHE_RECIPE:
            newState.cached_recipes = deepCopy(state.cached_recipes);
            for (let i = 0; i < newState.cached_recipes.length; i++) {
                if (newState.cached_recipes[i].UUID === action.recipe.UUID) {
                    return newState;
                } else {
                    if (i === newState.cached_recipes.length + 1) {
                        newState.cached_recipes = [...newState.cached_recipes, action.recipe];
                    }
                }
            }

    }
}
