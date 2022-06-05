import { Table, Checkbox } from "@nextui-org/react";
import { tinhGPA } from "../helper/common";

const StudentInfo = (props) => {
  return (
    <div>
      <h1>Danh sách học sinh</h1>
      <Checkbox defaultSelected={true}>Giảm</Checkbox>
      <Checkbox>Tăng</Checkbox>
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
            console.log(st);
            return (
              <Table.Row key={st.id}>
                <Table.Cell>{st.fullName}</Table.Cell>
                <Table.Cell>{st.diemToan}</Table.Cell>
                <Table.Cell>{st.diemHoa}</Table.Cell>
                <Table.Cell>{st.diemLy}</Table.Cell>
                <Table.Cell>
                  {tinhGPA(st.diemToan, st.diemHoa, st.diemLy).toFixed(2)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </div>
  );
};

export default StudentInfo;
