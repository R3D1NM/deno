const encoder = new TextEncoder()
const helloText = encoder.encode("Hello, Deno!")

await Deno.writeFile("hello.txt",helloText)