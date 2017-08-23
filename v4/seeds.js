var mongoose=require("mongoose")
var Campground=require("./models/campground")
var Comment=require("./models/comment")


var data=[
    {
    name:"Forest Camp",
    image:"https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
    description:"blah blah Camp"
        
    },
     {
    name:"Healthy Camp",
    image:"https://farm4.staticflickr.com/3063/2893962912_26d58f406c.jpg",
    description:"blah blah Camp"
        
    },
     {
    name:"Food Camp",
    image:"https://farm4.staticflickr.com/3445/3234956538_5f112f223c.jpg",
    description:"blah blah Camp"
        
    }
    
    ]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function(err){
    if(err){console.log(err)}
    
   console.log("Campgrounds removed!!")
   data.forEach(function(seed){
    Campground.create(seed,function(err,campground){
        if(err){
            console.log(err)
        }
        else{
            console.log("Added a campground")
            ///create a comment on each campground
            Comment.create({
                text:"Nyc Mountain",
                author:"Mark"
            },function(err,comment){
                if(err){
                    console.log(err)
                }
                else{
                    campground.comments.push(comment)
                    campground.save()
                    console.log("create a new comment")
                }
            }  )
        }
    })

})

    });

    
}


module.exports=seedDB