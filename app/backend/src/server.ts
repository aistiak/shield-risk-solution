


import GetAppServer from "./app";
import RootRoutes from "./routes/index.routes";


const server = GetAppServer(80,RootRoutes) ;

server.listen()

