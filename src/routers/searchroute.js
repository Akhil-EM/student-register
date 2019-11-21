const express=require('express');

////creating a router variable and assigning to express
var search_route=express.Router();

////creating a function to return router 

function router(nav)
{

    ////if get a route request this router will exicute
    search_route.route('/').
    get((req,res)=>{
        ////showing view all ejs file
         res.render('search.ejs',{nav})

    });
    return search_route;
}

/////exporting function to use out side

module.exports=router;



