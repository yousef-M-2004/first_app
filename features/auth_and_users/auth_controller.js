//sign up function 

const bcrypt = require("bcrypt");
const users = [ {               first_name: 'ahmed',
    last_name: 'hello',
    phone_number: '012544',
    email: 'heo@fds',
    password: '$2b$10$ykC16qi2nV3HMYT4J1dzFOqCB3GxuQkQW4wAqg9O/185TJCPYjBPG'
    }];
const sign_up= async (req,res)=> {
    try{
        
        const { first_name , last_name , phone_number, email ,password  } = req.body
        const check_user = users.find((user) => user.email === email ) ;
        if (check_user) {
            return res.status(400).send("cannot create account with this email ");
        }

        const hashed_password = await bcrypt.hash(req.body.password , 10)
         // 
        users.push(
            {
                first_name :req.body.first_name,

                last_name :req.body.last_name,

               phone_number : req.body.phone_number,
                  
                 email : req.body.email,
                
              
                password : hashed_password
            }
        )
        //res.redirect("/login ")
        res.send("done")
        console.log (users);
        }
        
        catch (err){
            res.send("error");
           // res.redirect ("/sign_up")
    
        }

}

//login function 

const login = async (req,res)=>{
    try {
        const email = req.body.email;
        const unh_password = req.body.password;
       
        const check_login =users.find((user)=> user.email === email );
        if (!check_login ){
            res.status(400).send("not there u may want to sign_up first")//.redirect
        }else if (check_login){
           const is_match = await bcrypt.compare (unh_password,check_login.password );
           if(is_match){
            res.send("login succesfully");
           }
           res.send("not the password i expected ");
                    

                }
                
        }

        catch {
        res.status (500).send(err)

               }
}
    
   


module.exports = {sign_up,users,login} ;