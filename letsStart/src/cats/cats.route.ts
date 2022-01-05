import { Cat, CatType } from "./cats.model";
import {
  readAllcat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from "./cats.service";
import { Router } from "express";

const router = Router();

// 전체 User 데이터 조회 -> GET
router.get("/cats", readAllcat);

// 특정 User데이터 조회 -> GET
router.get("/cats/:id", readCat);

// create 새로운 user 데이터 추가 api(회원가입 혹은 포스팅) -> POST
router.post("/cats", createCat);

// update user 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

// update user 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

// delete user 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
