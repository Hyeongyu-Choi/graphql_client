import { Form, Button, Table } from "react-bootstrap";

const OrdersPage = () => {
  return (
    <>
      <Form inline>
        <Form.Group className="mb-2">
          <Form.Control placeholder="회원명" />
        </Form.Group>
        <Form.Group className="mx-sm-1 mb-2">
          <Form.Control as="select">
            <option value="">주문상태</option>
            <option value="ORDER">ORDER</option>
            <option value="CANCEL">CANCEL</option>
          </Form.Control>
        </Form.Group>
        <Button className="mb-2">검색</Button>
      </Form>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>회원명</th>
            <th>대표상품 이름</th>
            <th>대표상품 주문가격</th>
            <th>대표상품 주문수량</th>
            <th>상태</th>
            <th>일시</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>member.name</td>
            <td>orderItems[0].item.name</td>
            <td>orderItems[0].orderPrice</td>
            <td>orderItems[0].count</td>
            <td>status</td>
            <td>orderDate</td>
            <td>
              <Button variant="danger">CANCEL</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default OrdersPage;
