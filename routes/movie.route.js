import express from "express";
const router= express.Router();
import 
{ updatemoviename,
 updatemovienamegiven,
 createmovie,
 updateMovies, 
 deletemovie } from "../services/flim.service.js";

router.get("/", async function (request, response) {
    if(request.query.ratinrouter){
    request.query.rating=+ request.query.rating
    }
        const datas= await updatemoviename (request);
        response.send(datas);
    });

router.get("/:name", async function (request, response) {
const {name}=request.params;

//    const movies= flims.find((mv)=>mv.name===name)
const movies=await updatemovienamegiven(name);
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

router.delete("/:id", async function (request, response) {
   const {id}=request.params
    // console.log(name);
//    const movies= flims.find((mv)=>mv.name===name)
const del=await deletemovie(id);console.log(del)
del.deletedCount>0?response.send(del):response.status(404).send("msg not found")
});
export default router;

