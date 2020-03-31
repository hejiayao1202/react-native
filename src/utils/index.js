import queryString from 'query-string'
// 封装方法
let rootUrl="https://www.fastmock.site/mock/14d7e3929c5fb9d582b02fc6960c636a/api";

let myFetch={
    get(url,queryParams){
        if(queryParams){
            // queryString.stringify()转成xxx=xxx
            url=rootUrl+url+"?"+queryString.stringify(queryParams)
        }else{
            url=rootUrl+url;
        }
        return fetch(url)
            .then((res)=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,
            {method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
            }
        )
        .then((res)=>res.json())
    }
}

//命名导出
export {myFetch};
