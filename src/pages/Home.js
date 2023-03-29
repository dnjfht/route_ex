import React from "react";

export default function Home({ animals }) {
  console.log(animals);
  // ['고양이', '토끼', '늑대', '사자'] props로 받을 수 있음

  return <div>Home</div>;
}
