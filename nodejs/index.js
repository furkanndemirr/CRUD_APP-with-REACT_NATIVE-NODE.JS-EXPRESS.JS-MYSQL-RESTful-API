const express = require("express");
const db = require("./data/db");
const router=express.Router();
const Kullanici = require("./models/tablobir");
const app = express();

app.use(express.json());

app.use("/update", async function(req,res){
    const id = req.body.id;
    console.log(id);
    const adi=req.body.adi;
    const soyadi=req.body.soyadi;
    const yasi=req.body.yasi;
    try {
        const user = await Kullanici.findByPk(id);
        if(user)
        {
            user.adi=adi;
            user.soyadi=soyadi;
            user.yasi=yasi;
            await user.save();
           
        }
        res.status(201).json({ message: "Okey"});
    } catch (err) {
        console.log("hata",err);
    }
 })
app.use("/delete", async function(req,res){
    const id = req.body.id;
    console.log(id);
    try {
        const user = await Kullanici.findByPk(id);
        if(user)
        {
            await user.destroy();
        }
        res.status(201).json({ message: "Okey"});
    } catch (err) {
        console.log("hata",err);
    }
 })
app.use("/heyo", async function(req,res){

   try {
    const users= await Kullanici.findAll({raw:true});
   
   res.json(users);
   } catch (err) {
    console.log("hata",err);
   }
})
app.use ("/",async function(req,res){
    const adi=req.body.adi;
    const soyadi=req.body.soyadi;
    const yasi=req.body.yasi;
    // console.log("adi",adi);
    // res.send(adi);
    try {
        await Kullanici.create({
            adi:adi,
            soyadi:soyadi,
            yasi:yasi

        });
        res.status(201).json({ message: "Okey"});
    } catch (err) {
        console.log("kayıt oluşturulamadı",err);
    }
})


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});