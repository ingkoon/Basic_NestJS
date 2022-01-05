import { throws } from "assert";
import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private setRoute() {
    // use middle router
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // 엔드포인트로 진입하기 전에 거치는 미들 웨어
    // 전체관리 시에는 use 사용
    //logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware!");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 errror middleware
    this.app.use((req, res, next) => {
      console.log("this is logging middleware!");
      res.send({ error: "404 not found error" });
      next();
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on ...");
    });
  }
}

const app: express.Express = express();

function init() {
  const server = new Server();
  server.listen();
}

init();
