import {Application, Router} from "https://deno.land/x/oak/mod.ts"


const app = new Application()
const router = new Router()
const port = 5000

interface Artist {
    id:string
    name:string
    group:string
}

// Dummy Data
let artists : Artist[] = [
    {
        id: "1",
        name: "LSY",
        group: "Dreamcatcher"
    },
    {
        id: "2",
        name: "KMJ",
        group: "Dreamcatcher"
    },
    {
        id: "3",
        name: "KBR",
        group: "Dreamcatcher"
    }
]

// Middlewares
app.use(router.routes())
app.use(router.allowedMethods())

// Routes
router
    .get('/',(context) => { 
    context.response.body = "Hello, Deno"
    })
    .get('/artists',(context) => { 
        context.response.body = artists
    })

// Application
console.log(`Server is listening on port: ${port}`);
await app.listen({port})