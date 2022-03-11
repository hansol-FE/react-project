import React from "react";
import { Table } from "reactstrap";

function QuestionList() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  const notices = [
    {
      id: 1,
      writer: "나희도",
      content: "3월 교육프로그램 문의드려요!",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 2,
      writer: "백이진",
      content: "환불 언제되나요?",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 3,
      writer: "고유림",
      content: "회원가입 했습니다.",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 4,
      writer: "지승완",
      content: "하반기 교육일정 문의입니다.",
      date: `${yyyy}.${mm}.${dd}`,
    },
    {
      id: 5,
      writer: "문지웅",
      content: "지난 교육 관련 문의",
      date: `${yyyy}.${mm}.${dd}`,
    },
  ];

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>제 목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr>
              <th scope="row">{notice.id}</th>
              <td>{notice.content}</td>
              <td>{notice.writer}</td>
              <td>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default QuestionList;