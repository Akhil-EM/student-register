////requiring needed models
const express=require('express');
const chalk=require('chalk');
const path=require('path');
const cors=require('cors');
const mongoose=require('mongoose');

////creating a navigation bar array 

var navigaton=[{
            link:"/",
            tittle:"Add Student"
            },
            {
                link:"/viewall",
                tittle:"View Students"
                },
                {
                    link:"/search",
                    tittle:"Search Student"
                    },
                    {
                        link:"/edit",
                        tittle:"Edit Student"
                        },
                        {
                            link:"/delete",
                            tittle:"Delete Student"
                            }];

////creating express app modules to use routers and etc

var app=new express();

////requiring routers and calling returned fn from router.js files

const va_router=require("./src/routers/viewallroute")(navigaton);

////using router variable

app.use('/viewall',va_router);
app.get('/',function(req,res){

    res.render('index.ejs',{
        nav:navigaton,
        tittle:"Add Student"
    })

});
app.use(express.static(path.join(__dirname,"/public")));
app.set("views","./src/views");
app.set("view engine","ejs");

app.listen(process.env.PORT||4000,()=>{
       console.log(chalk.blueBright("port  is now active"));
});