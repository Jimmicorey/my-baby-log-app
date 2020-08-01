import config from '../config';

const DatalogsApiService = {

//GET ALL THE DATA LOGS     
getAllDatalogs() {
    return fetch(`${config.API_ENDPOINT}/allthedata`, {
        headers: {
        },
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
},


//GET FEED BABY DATA LOGS
getFeedBabyDatalogs() {
    return fetch(`${config.API_ENDPOINT}/feedbabydata`, {
        headers: {
        },
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
},


//GET CHANGE DIAPER DATA LOGS 
getChangeDiaperDatalogs() {
    return fetch(`${config.API_ENDPOINT}/changediaperdata`, {
        headers: {
        },
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
},


//GET CHANGE DIAPER DATA LOGS 
getChangeDiaperDatalogs() {
    return fetch(`${config.API_ENDPOINT}/changediaperdata`, {
        headers: {
        },
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
},


//GET BATH TIME DATA LOGS
getBathTimeDatalogs() {
    return fetch(`${config.API_ENDPOINT}/bathtimedata`, {
        headers: {
        },
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
},


}

export default ;


/** "MY BABY LOG" CURRENT USABLE ENDPOINTS 
 * /                   <--- "Hello, Mommies & Daddies!" --->
 ** /allthedata         <--- ALL the datalogs ---> getAllDatalogs
 ** /feedbabydata       <--- "Feed Baby" datalogs ---> getDatalogsByEventCategory(Feed)
 ** /changediaperdata   <--- "Change Diaper" datalogs ---> getDatalogsByEventCategory(Diaper)
 ** /bathtimedata       <--- "Bath Time" datalogs ---> getDatalogsByEventCategory(Bath)
 *  
**/ 