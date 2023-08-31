


import GetAppServer from "./app";
import RootRoutes from "./routes/index.routes";


const server = GetAppServer(3000,RootRoutes) ;

server.listen()

