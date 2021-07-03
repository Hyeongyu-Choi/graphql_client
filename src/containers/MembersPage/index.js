import { Table } from "react-bootstrap";

const MembersPage = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>도시</th>
          <th>주소</th>
          <th>우편번호</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>City</td>
          <td>Street</td>
          <td>Zipcode</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MembersPage;
