let http = require("http");
let url = require("url");
let fs=require("fs")
let details=[]
let indexPage = `
            <html>
                    <head> 

                    </head>
                    <body>
                    <h2>Welcome to Task Tracker </h2>
                    
                    <a href="Login">Task Tracking Details </a>
                    </body>
            </html>
`


let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Task Tracking Page</h2>
    <form action="checkLogin">
        <label>EMPID</label>
        <input type="text" name="empid"/><br/>
        <label>EMPName</label>
        <input type="text" name="empname"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/></br></br>
       <a href="signup">Click Here to Delete the </a><br><br>
       <a href="delete">Click Here to Display all the files </a><br><br>
       
       
    </form>
</body>
</html> 
`
let registerLoginPage=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Delete Page</h2>
    <form action="register">
        <label>EMPID</label>
        <input type="text" name="empid"/><br/>
        
        <input type="submit" value="Delete"/>
       <input type="reset" value="reset"/> 
    </form>
</body>
</html>
`
let Page=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Display Page</h2>
    <form action="display">
        <input type="submit" value="Display"/>
       
    </form>
    <div class="main">
    </div>
</body>
</html>
`


let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo)
    //response.end("welcome")
    
        if(urlInfo.path != "/favicon.ico"){
            if(urlInfo.path == "/AboutUs"){
                    response.write("Welcome to About Us Page");
            }else if(urlInfo.path == "/ContactUs"){
                response.write("Welcome to Contact Us Page");
            }else if(urlInfo.path =="/signup"){
                response.write(registerLoginPage);}
                else if(urlInfo.path =="/delete"){
                    response.write(Page);}
            else if(urlInfo.path == "/Login"){
                response.write(loginPage);}
                else if(urlInfo.pathname=="/checkLogin"){
                    let login=urlInfo.query
                    let result = details.find(l=>l.empid == login.empid);
                   // console.log(result)
                    
                    // 200 -success code , content type in header text/html
                response.writeHead(200,{"content-type":"text/html"});
                
                    if(result == undefined){
                        details.push(login);
                        //console.log()
                       // console.log(details);
                        response.write("Task added");     
                        response.write("Task details registered")
                       console.log("data stored in a file")
                       let emp=JSON.parse(fs.readFileSync("Task.json").toString())
                       emp.push(login);
                       taskstring=JSON.stringify(emp)
                       fs.writeFileSync("Task.json",taskstring)
                     //  console.log(taskstring)
                      }else {
                        response.write("User Name must be unique!");     
                        response.write(loginPage); 
                }
                
                }else if(urlInfo.pathname == "/register"){
                    let login = urlInfo.query;
                    let result = details.find(l=>l.empid == login.empid);
                   // console.log(result)
                    // 200 -success code , content type in header text/html
                    response.writeHead(200,{"content-type":"text/html"});
                    if(result == undefined){
                        
                        response.write("Please enter a valid user nameS");
                    }else{
                        var key=result
                        //console.log(key)
                      // console.log (key.empid)
                        let emp=JSON.parse(fs.readFileSync("Task.json").toString())
                     
                        
                        // taskstring=JSON.stringify(emp)
                        // fs.writeFileSync("Task.json",taskstring)
                        //console.log(emp) 
                        let empids=[];
                       emp.forEach(function(emp){
                           empids.push(emp)
                         })
                      

                         for (let index = 0; index < empids.length; index++) {
                                if(empids[index].empid==result.empid){
                                    console.log(result)
                                    empids.splice(index, 1);
                            }
                        }
                        taskstring=JSON.stringify(empids)
                        fs.writeFileSync("Task.json",taskstring)
                         response.write("Task has been Deleted")
                    }
                    }else if(urlInfo.pathname == "/display"){
                        let emp=JSON.parse(fs.readFileSync("Task.json").toString())
                        //localStorage.setItem("empobj",JSON.stringify(emp))
                        //let empparse= localStorage.getItem("empobj");
                        taskstring=JSON.stringify(emp)
                        console.log(emp.length)

                        var tableContent=""
    var startTable ="<table border=1><tr><th>EMP ID</th><th>EMP Name </th><th>Task</th></tr>"
    for(let i=0;i<emp.length;i++){
        
    tableContent +="<tr><td>"+emp[i].empid+"</td><td>"+emp[i].empname+"</td><td>"+emp[i].task+"</td></tr>"
    }
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
   
Page=tableContent;
                        response.write(tableContent)
                    }
                else {
                    response.write(indexPage);  
                }
            
    response.end();
            }
})

server.listen(9090,()=>console.log("Server running on port number 9090"))
//console.log(details)

