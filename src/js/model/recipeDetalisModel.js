export class RecipeModel
{
    constructor(id)
    {
        this.id=id;
    }
    getRecipeResult(callback)
    {
        let http=new XMLHttpRequest();
        http.open('GET',`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        http.send();
        http.addEventListener('readystatechange' , function()
        {
            if(http.readyState==4 && http.status==200)
            {
               let result=JSON.parse(http.response).recipe;
               callback(result);
            } 
            

        })
    }

}