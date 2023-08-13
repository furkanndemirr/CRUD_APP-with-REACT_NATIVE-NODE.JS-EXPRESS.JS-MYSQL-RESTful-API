const {DataTypes}=require("sequelize");
const sequelize=require("../data/db");

const Kullanici = sequelize.define("kullanici",{
    adi:{
        type:DataTypes.STRING,
        allowNull:false
    },
    soyadi:{
        type:DataTypes.STRING,
        allowNull:false
    },
    yasi:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})
async function sync(){
    await Kullanici.sync({alter:true});
    console.log("Kullanici tablosu eklenmiştir.")
}
sync();

module.exports=Kullanici;