import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
config({ path: "./.env" });
import fs from 'fs';

import globalErrorHandler from './middleware/globalErrorHandler.js';
// create the  app 
const app = express();
app.use(express.json());
app.use(cors({
  origin: "*"
}));

// api routes 
app.get('/',(req,res,next)=>{

  // bad way 
//  const  file = fs.readFileSync('Jira Complete Tutorial _ jira tool full course(1080P_HD).mp4');
//  res.writeHead(200,{
//   'Content-Type':'video/mp4'
//  });

//  res.end(file);

// good way using stream 
// const readStream = fs.createReadStream('java complete slide dsa .pdf');
// readStream.pipe(res);

// god way to video stream 
// const dataStream = fs.createReadStream('Jira Complete Tutorial _ jira tool full course(1080P_HD).mp4');
// dataStream.pipe(res);


res.send("hello world");
})



app.get('*',(req,res,next)=>{
  const err = new Error();
  err.message="Invalid route";
  err.statusCode=400;
 return next(err);
})

// error handler
app.use(globalErrorHandler);

// listen app 
const port = process.env.PORT || 3000;

 app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})