const mongoos=require("mongoose");
const Schema=mongoos.Schema;

const bookmark=new Schema({
    bookName:{
        type:String,
        unique: true,
    },
    price:{
        type:Number,
    },
    author:{
      type:String,
    },
    language:{
        type:String,
    },
    aboutAuthor:{
      type:String,
    },
});

const BookModal=mongoos.model("BookModal",bookmark)
module.exports={BookModal};