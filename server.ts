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
    .post('/artist',async (context) => { 
        if(context.request.hasBody){
            const body = await context.request.body
            const newId = (artists.length +1).toString()
            
            const newArtist :Artist = await body.json()
            newArtist.id = newId
            artists.push(newArtist)

            context.response.status = 201
            context.response.body = newArtist
            
        } else {
            context.response.status = 400
            context.response.body = "Data Not Found"
        }
    })
    .get('/artist/:id',(context) => { 
        const id = context.params.id
        const artist : Artist | undefined = artists.find((a)=> a.id == id)

        if(artist){
            context.response.status = 200
            context.response.body = artist
        }else {
            context.response.status = 404
            context.response.body = "No matching artist"
        }
    })

// Application
console.log(`Server is listening on port: ${port}`);
await app.listen({port})