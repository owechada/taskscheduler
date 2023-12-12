const { Client } = require('pg');
const Faker = {  first_name:"rrr",last_name:"jhhhhh",
email:'hhhhh', password_hash:'hkjljkjkj'}



const client = new Client({
  user: 'tasks_npec_user',
  host: 'dpg-cls7a7cm7d1c73f93np0-a.oregon-postgres.render.com',
  database: 'tasks_npec',
  password: '5Kb5cNiwGQNJWWMX1Qf8bk9YTTDvpVAD',
  port: 5432, 
  ssl: true
});

 async function connectToDatabase() {

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
    
  
    
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error.message);
  } finally {
 
  }


}


function createuser(first_name,last_name,email,password_hash){
  
var create=`INSERT INTO users_ (first_name, last_name, email, password_hash)
values(
'${first_name}',
 '${last_name}',
'${ email}',
 ' ${password_hash}' );`

    client.query(create, (err,res)=>{
if(!err){

    console.log(res.rows)
}

else{

    console.log(err.message)
}
    })
}
 


function createnewTask(){


}

function deleteTask(){


}


function updateTask(){


}

function readTask(){



}
connectToDatabase();

createuser(Faker.first_name,Faker.last_name,Faker.email,Faker.password_hash)
