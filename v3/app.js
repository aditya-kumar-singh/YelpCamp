var express =   require("express"),
     app    =   express(),
 bodyparser =   require("body-parser"),
  mongoose  =    require("mongoose"),
  Campground =   require("./models/campground"),
  seedDB     =   require("./seeds")
  
  seedDB();
   
   mongoose.connect("mongodb://localhost/yelp_camp_v3")
   
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))

//Schema Setup

//////////campground logic moved to models////////////////////////////////////////




/*Campground.create(
    {
    
        name:"Nanda Parbat",
        image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
        description:"This is a Nanda Parbat have fun"
        
    },
    function(err,campground){
        if(err){
            console.log("Error")
            console.log("Something is Wrong")
        }
        
        else{
            console.log(campground)
            console.log("New Campground Added")
        }
    }
    )
*/




app.get("/",function(req,res){
    res.render("landing")
    //res.send("this will be the landing page soon!")
})

app.get("/campgrounds",function(req,res){
    Campground.find({},function(err, campgrounds){
        if(err){
            console.log(err)
            console.log("Something Wrong")
            
        }
        else{
            res.render("index",{campgrounds:campgrounds});
        }
    })
       
})

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var newCampground={name:name,image:image,description:desc}
    //create a new campground and save it to  db
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err)
        }
        else{
            //redirect back to campgrounds
             res.redirect("/campgrounds")
        }
    })
    //campgrounds.push(newCampground)
    
   
    //res.send("You are in post route")
})

app.get("/campgrounds/new",function(req, res) {
    res.render("new")
    
})
//shows more info abt campground
app.get("/campgrounds/:id",function(req, res) {
    //find  the campground with provided id
    
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err)
        }
        else{
            ///render show
            console.log(foundCampground)
            res.render("show",{campground:foundCampground})
        }
    })
   
    //res.send("This will be show page ")
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YelpCamp Server has Started")
})