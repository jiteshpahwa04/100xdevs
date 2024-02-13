import { Hono } from 'hono'

const app = new Hono()

const middleware = async(c:any, next:any)=>{
  try{
    if(c.req.header("Authorization")){
      await next();
    }else{
      return c.text("You DON'T have access !!")
    }
  }catch(err){
    return c.text("We ran into an error !!")
  }
}

app.post('/', middleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app