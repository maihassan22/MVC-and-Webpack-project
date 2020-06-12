import {searchResult , inputSearchValue} from '../element.js'

export let getInputValue = () => inputSearchValue.value;


export function displaySearchResult(recipes)
{
    let markUp=``;
    for(let i=0; i<recipes.length ; i++)
    {
        markUp+=` <div class="media p-4">
        <img src="${recipes[i].image_url}" class="align-self-center mr-3 rounded-circle" alt="...">
        <div class="media-body">
        <a href=#${recipes[i].recipe_id}>
          <h6 class="mt-0">${recipes[i].title}</h6>
          <p>by <span>${recipes[i].publisher}</span></p>
          </a>
        </div>
      </div>
      <hr class=" w-75 m-auto">`;
    }
    searchResult.innerHTML=markUp;
    


}