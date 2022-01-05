import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

const data = [1, 2, 3, 4];

// 엔드포인트로 진입하기 전에 거치는 미들 웨어
// 전체관리 시에는 use 사용
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware!");
  next();
});

// json middleware
app.use(express.json());

// 전체 User 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// 특정 User데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id == params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// create 새로운 user 데이터 추가 api(회원가입 혹은 포스팅)
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // 미들 웨어가 있어야 body를 포함하여 제대로 전송이 가능하다.
    Cat.push(data); // => 데이터 저장
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// app.*으로 시작하는 코드는 라우터를 의미한다.
// 클라이언트 혹은 프론트엔드가 해당하는 엔드포인트로 http로 http메서드로 요청을 하게 되면
// 해당 요청에 대한 결과를 받는다.
app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.use((req, res, next) => {
  console.log("this is logging middleware!");
  res.send({ error: "404 not found error" });
  next();
});

app.listen(8000, () => {
  console.log("server is on ...");
});
