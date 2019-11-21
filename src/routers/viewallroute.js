const express=require('express');

////creating a router variable and assigning to express
var view_all_route=express.Router();

////creating a function to return router 

function router(nav)
{

    ////if get a route request this router will exicute
    view_all_route.route('/').
    get((req,res)=>{
        ////showing view all ejs file
         res.render('viewall.ejs',{nav})

    });
    return view_all_route;
}

/////exporting function to use out side

module.exports=router;



