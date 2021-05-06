import 'whatwg-fetch';  

class HttpService{
projectList=()=>{
         var promise=new Promise((resolve,reject)=>{
         fetch('http://localhost:8000/api/RealEstate')
        .then(res=>{
            resolve(res.json());
        })
            
            });
             
         return promise;      
    }
}
export default HttpService;