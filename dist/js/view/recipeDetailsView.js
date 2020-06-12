import{recipeDetails} from '../element.js'
export function displayRecipeDetails(id)
{
    let ingredients=id.ingredients;
   let markUp=`
    <h3>${id.title}</h3>
    <img src="${id.image_url}" class="w-100">
    <div id="detailsBody">
        <ul class="fa-ul py-3 d-flex flex-wrap">`;
        
        for(let i=0 ;i<ingredients.length ;i++)
        {
       markUp+=` <li class="w-50 p-2"><span class="fa-li"><i class="fas fa-utensils"></i></span>${ingredients[i]}</li>`

       } 
       markUp+=`</ul>
       </div>`;

       recipeDetails.innerHTML=markUp;
       
        


}