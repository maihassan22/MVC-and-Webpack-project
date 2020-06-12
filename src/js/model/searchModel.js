export class SearchModel
{
    constructor(query)
    {
        this.query=query;
    }
    getSeachResult(callback)
    {
        let http=new XMLHttpRequest();
        http.open('GET',`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        http.send();
        http.addEventListener('readystatechange' , function()
        {
            if(http.readyState==4 && http.status==200)
            {
               let result=JSON.parse(http.response).recipes;
               callback(result);
            }
            
            
        })
    }

}