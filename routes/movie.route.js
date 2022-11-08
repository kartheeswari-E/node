import express from express
const router= express.Router();
import{client} from"..node41.js"

router.get("/", async function (request, response) {
    if(request.query.ratinrouter){
    request.query.rating=+ request.query.rating
    }
        const datas= await updateMovies(request);
        response.send(datas);});

        router.get("/:name", function (request, response) {
        const {name}=request.params;
    console.log(name);
   const movies= newFunction(name)
   movies?response.send(movies):response.status(404).send("msg not found")
});


router.get("/:name", async function (request, response) {
const {name}=request.params;
    // console.log(name);
//    const movies= flims.find((mv)=>mv.name===name)
const movies=await updatemoviename(name);
   movies?response.send(movies):response.status(404).send("msg not found")
});

router.post("/",express.json(),async function (request, response) {
    const data=request.body;
    // console.log(name);
//    const movies= flims.find((mv)=>mv.name===name) 
const result=await createmovie(data);
  response.send(result);
});
router.put("/:name", async function (request, response) {
    const {name}=request.params
    const data=request.body
     console.log(name);
     console.log(data);
 //    const movies= flims.find((mv)=>mv.name===name)
 const del=await updateMovies(name, data);console.log(del)
 del?response.send(del):response.status(404).send("msg not found")
 });

app.delete("/:id", async function (request, response) {
   const {id}=request.params
    // console.log(name);
//    const movies= flims.find((mv)=>mv.name===name)
const del=await deletemovie(id);console.log(del)
del.deletedCount>0?response.send(del):response.status(404).send("msg not found")
});
export default router;

async function newFunction(name, data) {
    return await client

        .db("node").collection("flims").updateOne({ name: name }, { $set: data });
}

function newFunction(name) {
    return flims.find((mv) => mv.name === name);
}

async function deletemovie(id) {
    return await client

        .db("node").collection("flims").deleteOne({ id: id });
}

async function createmovie(data) {
    return await client
        .db("node").collection("flims").insertMany(data);
}

async function updatemoviename(name) {
    return await client
        .db("node").collection("flims").filter({ name: name });
}

async function updatemoviename(request) {
    return await client
        .db("node").collection("flims").find(request.query).toArray();
}
