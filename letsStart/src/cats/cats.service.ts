import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

//서비스 패턴을 통해 서비스 새성

// 전체 User 데이터 조회 -> GET
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// 특정 User데이터 조회 -> GET
export const readCat = (req: Request, res: Response) => {
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
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// create 새로운 user 데이터 추가 api(회원가입 혹은 포스팅) -> POST
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    // 미들 웨어가 있어야 body를 포함하여 제대로 전송이 가능하다.
    Cat.push(data); // => 데이터 저장
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// update user 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    console.log(body);
    // 미들 웨어가 있어야 body를 포함하여 제대로 전송이 가능하다.

    Cat.forEach((cat) => {
      if (cat.id == params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// update user 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;

    let result;
    console.log(body);
    // 미들 웨어가 있어야 body를 포함하여 제대로 전송이 가능하다.

    Cat.forEach((cat) => {
      if (cat.id == params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// delete user 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    let result;

    // 미들 웨어가 있어야 body를 포함하여 제대로 전송이 가능하다.
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
