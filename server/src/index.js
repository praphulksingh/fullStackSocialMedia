
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from  "./app.js";

dotenv.config({
    path: './.env'
})

const port=process.env.PORT || 8000


try {
  connectDB()
.then(()=>{
  app.listen(port, ()=>{
    console.log("App is listening on PORT",port)
  })
})
.catch((error)=>{
  console.log("Error  occured while establishing a connection with MongoDB" , error)
})
} catch (error) {
  console.log("Error  occured while initializing the server ", error);
}

