import {copy} from 'std/io/copy.ts'

const file = await Deno.open("hello.txt")
await copy(file,Deno.stdout)
file.close()

