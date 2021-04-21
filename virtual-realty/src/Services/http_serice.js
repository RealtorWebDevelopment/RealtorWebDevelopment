import 'whatwg-fetch';
class HttpService{
     
   
    login = (userDet) =>{
       
        
        
        fetch('http://localhost:8000/api/RealtorLogin',{
            
            method: 'post',
            headers: {
                'content-type': 'application/json'
                
            },
            body: JSON.stringify(userDet),      
            
        }).then(res => {
            
            console.log(res.json())
        })
    }
}

export default HttpService;