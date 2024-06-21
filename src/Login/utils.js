const baseUrl=process.env.REACT_APP_BASE_URL;

export const login=async({username,password})=>{
    try{
        const response=await fetch(`${baseUrl}/auth/login`,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({username,password})
    }
        )}
    catch(error){
        return 'error during Login'
        
    }
}
