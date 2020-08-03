import config from '../config';

const DatalogsApiService = {

    //GET ALL THE DATA LOGS - ENDPOINT TEST
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


    //GET FEED BABY DATA LOGS - ENDPOINT 1-1
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



    //GET CHANGE DIAPER DATA LOGS - ENDPOINT 2-1
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


    //GET BATH TIME DATA LOGS  - ENDPOINT 3-1
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

    //POST NEW DATA LOGS - ENDPOINT 4-1
    postNewDatalog(newEvent) {
        console.log(`postNewDatalog ${newEvent} works`);
        return fetch(`${config.API_ENDPOINT}/feedbabydata`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({event_category: newEvent})
        })
          .then(res => res.json())
    }
}

export default DatalogsApiService;









/** "MY BABY LOG" CURRENT USABLE ENDPOINTS 
 * /                   <--- "Hello, Mommies & Daddies!" --->
 ** /allthedata         <--- ALL the datalogs ---> getAllDatalogs
 ** /feedbabydata       <--- "Feed Baby" datalogs ---> getDatalogsByEventCategory(Feed)
 ** /changediaperdata   <--- "Change Diaper" datalogs ---> getDatalogsByEventCategory(Diaper)
 ** /bathtimedata       <--- "Bath Time" datalogs ---> getDatalogsByEventCategory(Bath)
 *  
**/ 