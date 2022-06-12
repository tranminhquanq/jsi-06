import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "@nextui-org/react";
import StudentInfo from "./StudentInfo";
import { tinhGPA } from "../helper/common";

const StudentForm = () => {
  const [student, setStudent] = useState({
    fullName: "",
    diemToan: 0,
    diemHoa: 0,
    diemLy: 0,
    GPA: 0,
  });
  const [studentsInfo, setStudentsInfo] = useState([]);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // console.log("studentsInfo", studentsInfo);

  const sortUP = () => {
    const newState = [...studentsInfo];
    newState.sort((a, b) => {
      return a.GPA - b.GPA;
    });
    // console.log("sort up", newState);
    setStudentsInfo([...newState]);
  };

  const sortDown = () => {
    const a = [...studentsInfo];
    a.sort((a, b) => {
      return b.GPA - a.GPA;
    });
    console.log("sort down", a);

    setStudentsInfo([...a]);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (student.fullName !== "") {
      let diemToan = Number(student.diemToan);
      let diemHoa = Number(student.diemHoa);
      let diemLy = Number(student.diemLy);

      const newStudent = {
        ...student,
        id: uuidv4(),
        diemToan,
        diemHoa,
        diemLy,
        GPA: tinhGPA(diemToan, diemHoa, diemLy),
      };
      setStudentsInfo((prev) => [newStudent, ...prev]);
      setStudent({
        fullName: "",
        diemToan: 0,
        diemHoa: 0,
        diemLy: 0,
      });
    }
  };

  return (
    <Container lg>
      <form>
        <div className="form-group">
          <label>Họ và tên:</label>
          <input
            type="text"
            value={student.fullName}
            name="fullName"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Toán:</label>
          <input
            type="number"
            value={student.diemToan}
            name="diemToan"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Hoá:</label>
          <input
            type="number"
            value={student.diemHoa}
            name="diemHoa"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Lý:</label>
          <input
            type="number"
            value={student.diemLy}
            name="diemLy"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={onClickHandler}>Submit</button>
      </form>
      <StudentInfo
        studentsInfo={studentsInfo}
        sortUP={sortUP}
        sortDown={sortDown}
      />
    </Container>
  );
};

export default StudentForm;
