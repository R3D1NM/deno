Deno.serve((_request: Request) => {
    return new Response("Hello, Deno!");
});