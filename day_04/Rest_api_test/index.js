const express=require('express');
const fs=require('fs');
const app=express();

const port=process.env.PORT || 3000;

const users=require("./MOCK_DATA.json");

app.use(express.urlencoded({extended:false}));

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((u)=>`<li>${u.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});




app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.post('/api/users',(req,res)=>{
    const body=req.body;
    users.push({id:users.length+1,...body});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"posting",id:`${users.length+1}`});
    });
    
});

app.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((u)=>u.id===id);
    return res.json(user);
}).patch((req,res)=>{
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"posting",id:`${users.length+1}`});
    });
    return res.json({status:"pending"});
})
.delete((req,res)=>{
    fs.rm('/api/users/:id',(err,data)=>{
        return res.json({status:"deleted",id:`${req.params.id}`});
    });
})

app.listen(port,()=>{console.log(`server started at ${port}`)})