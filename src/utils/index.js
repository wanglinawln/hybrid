import queryString from "query-string"
const rootUrl='https://www.fastmock.site/mock/86b09c8f56c7f59719ac53257c5bf20d/api';

let myFetch={
    get(url,queryParams){
        url=rootUrl+url;
        if(queryParams){
            url+="?"+queryString.stringify(queryParams)
        }
        return fetch(rootUrl+url)
                    .then(res=>res.json())


    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
    }
}

export {myFetch};