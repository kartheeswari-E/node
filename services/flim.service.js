import { client } from "../index.js";

export async function updateMovies(name, data) {
    return await client

        .db("node").collection("flims").updateOne({ name: name }, { $set: data });
}
export async function deletemovie(id) {
    return await client

        .db("node").collection("flims").deleteOne({ id: id });
}
export async function createmovie(data) {
    return await client
        .db("node").collection("flims").insertMany(data);
}
export async function updatemovienamegiven(name) {
    return await client
        .db("node").collection("flims").findOne({ name: name });
}
export async function updatemoviename(request) {
    return await client
        .db("node").collection("flims").find(request.query).toArray();
}
