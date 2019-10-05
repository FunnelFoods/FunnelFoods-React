/* Action types, these are the ONLY WAY in which you should modify the Store */
export const SIGN_IN = "SIGN_IN"; /* stub */
export const SIGN_UP = "SIGN_UP"; /* stub */
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const EDIT_INGREDIENT = "EDIT_INGREDIENT"; /* stub */
export const ADD_PAYMENT = "ADD_PAYMENT"; /* stub */
export const REMOVE_PAYMENT = "REMOVE_PAYMENT"; /* stub */
export const FAVORITE_RECIPE = "FAVORITE_RECIPE"; /* stub */
export const UNFAVORITE_RECIPE = "UNFAVORITE_RECIPE"; /* stub */
export const CACHE_RECIPE = "CACHE_RECIPE";

export function signIn(response) {
    return {type: SIGN_IN, response};
}

export function signUp (response) {
    return {type: SIGN_UP, response};
}

export function addIngredient(ingredient) {
    return {type: ADD_INGREDIENT, ingredient};
}

export function removeIngredient(ingredient) {
    return {type: REMOVE_INGREDIENT, ingredient};
}

export function editIngredient(oldIngredient, newIngredient) {
    return {type: EDIT_INGREDIENT, oldIngredient, newIngredient};
}

export function favoriteRecipe(recipe) {
    return {type: FAVORITE_RECIPE, recipe};
}

export function unfavoriteRecipe(recipe) {
    return {type: UNFAVORITE_RECIPE, recipe};
}

export function cacheRecipes(recipe) {
    return {type: CACHE_RECIPE, recipe}
}