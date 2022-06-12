import React, { useState } from "react";
import { Table, Radio } from "@nextui-org/react";

const StudentInfo = (props) => {
  const [sortBy, setSortBy] = useState("UP");

  // console.log("sortBy", sortBy);

  return (
    <div>
      <h1>Danh sách học sinh</h1>
      <Radio.Group
        label="Sort"
        defaultValue="UP"
        onChange={(value) => {
          console.log("value", value);
          if (value === "UP") {
            props.sortUP();
          } else {
            props.sortDown();
          }
          setSortBy(value);
        }}
      >
        <Radio value="UP" name="sort" checked={sortBy === "UP"}>
          Tăng
        </Radio>
        <Radio value="DOWN" name="sort" checked={sortBy === "DOWN"}>
          Giảm
        </Radio>
      </Radio.Group>
      <Table
        aria-label="Example static collection table with multiple selection"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>Tên</Table.Column>
          <Table.Column>Điểm Toán</Table.Column>
          <Table.Column>Điểm Hoá</Table.Column>
          <Table.Column>Điểm Lý</Table.Column>
          <Table.Column>GPA</Table.Column>
        </Table.Header>
        <Table.Body>
          {props.studentsInfo.map((st) => {
            return (
              <Table.Row key={st.id}>
                <Table.Cell>{st.fullName}</Table.Cell>
                <Table.Cell>{st.diemToan}</Table.Cell>
                <Table.Cell>{st.diemHoa}</Table.Cell>
                <Table.Cell>{st.diemLy}</Table.Cell>
                <Table.Cell>{st.GPA.toFixed(2)}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={10}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </div>
  );
};

export default StudentInfo;
