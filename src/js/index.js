import {SearchModel} from './model/searchModel.js'
import {searchBtn} from './element.js'
import {displaySearchResult ,getInputValue} from './view/searchView.js'
import {displayRecipeDetails} from './view/recipeDetailsView.js'
import {RecipeModel} from './model/recipeDetalisModel.js'


let controlSearch = () =>
{
    let query =getInputValue()
    let search= new SearchModel(query);
    search.getSeachResult(displaySearchResult);
}

searchBtn.addEventListener('click', controlSearch)


let controlRecipe =()=>
{
    let recipeId=window.location.hash.replace('#','')
   let recipe = new RecipeModel(recipeId)
   recipe.getRecipeResult(displayRecipeDetails)
}


window.addEventListener('hashchange' , controlRecipe)







