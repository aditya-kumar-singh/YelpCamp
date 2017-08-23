var express=require("express")
var app=express()
var bodyparser=require("body-parser")
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
var campgrounds=[
        {name:"San Francisco",
        image:"https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
        {name:"Nanda Parbat",
        image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
       { name:"San Francisco",
        image:"https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
        { name:"Mount k2",
        image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"}
       
       
        ]
    

app.get("/",function(req,res){
    res.render("landing")
    //res.send("this will be the landing page soon!")
})

app.get("/campgrounds",function(req,res){
        res.render("campgrounds",{campgrounds:campgrounds})
})
app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name,image:image}
    campgrounds.push(newCampground)
    res.redirect("/campgrounds")
    //res.send("You are in post route")
})

app.get("/campgrounds/new",function(req, res) {
    res.render("new")
    
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YelpCamp Server has Started")
})