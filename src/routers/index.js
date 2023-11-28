import express from 'express'
import userRoutes from './user.routers'
import messageRouters from './messages.routers'

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message: "This is BDS",
      });
})

routes.use('/api/v1/users',userRoutes)
routes.use('/api/v1/messages',messageRouters)

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes