import axios from 'axios' ;
const API_BASE_URL = 'https://instagram-clone-be.onrender.com' ;

export const SignUpServices = async(user)=>{
    try{

        return await axios.post(`${API_BASE_URL}/signup` , user)

    }catch(error){
        console.log("Some error while signing up") ;
    }

   

}

export const LogInServices = async(user)=>{
    try{

        return await axios.post(`${API_BASE_URL}/login` , user)

    }catch(error){
        console.log("Some error while Loging ") ;
    }

   

}
