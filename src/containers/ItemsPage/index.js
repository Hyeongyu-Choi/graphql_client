import { Button, Table } from "react-bootstrap";

const ItemsPage = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>가격</th>
          <th>재고수량</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
          <td>StockQuantity</td>
          <td>
            <Button>수정</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ItemsPage;
