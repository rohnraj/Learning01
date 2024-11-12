const userModel=require('./Model/userDetails')
const data=[
    {
        name:'Richa Jha',
        enrollment_number:101,
        age:21
    },{
        name:'Rohan Raj',
        enrollment_number:102,
        age:24
    },
    {
        name:'Harsh Jha',
        enrollment_number:501,
        age:18
    }
]

async function seedingData(){
    try{

        await userModel.insertMany(data)
        console.log('data seeded successfully');
    }
    catch(e){
        console.log(`some error encountered->${e}`);
    }
}

module.exports=seedingData