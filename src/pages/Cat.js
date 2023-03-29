import React from "react";
import { useParams } from "react-router-dom";

export default function Cat() {
  const param = useParams();
  console.log(param);
  // 웹사이트 주소에는 파라미터와 쿼리라는 게 있음.
  // 파라미터 : /cat/nabi => /nabi
  // 쿼리 : /cat?name=nabi => ?name=nabi
  // {id: '1'} => localhost:3000/cat/1을 쳐서 들어갔기 때문

  return <div>고양이 화면입니다!</div>;
}
