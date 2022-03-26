import express from 'express';
import { basePath, port } from 'globalConfig';
import router from 'router';

// @ts-ignore
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());
server.use(basePath, router);
server.use(router);

server.listen(port, () => {
  console.log(`Server started: http://127.0.0.1:${port}`);
});
