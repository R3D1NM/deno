import {Application, Router} from "https://deno.land/x/oak/mod.ts"


const app = new Application()
const router = new Router()
const port = 5000


// Middlewares
app.use(router.routes())
app.use(router.allowedMethods())

// Routes
router.get('/',(context) => { 
    context.response.body = "Hello, Deno"
})

// Application
console.log(`Server is listening on port: ${port}`);
await app.listen({port})