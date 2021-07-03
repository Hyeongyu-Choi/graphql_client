import { Form, Button } from "react-bootstrap";

const OrderPage = () => {
  return (
    <Form style={{ marginBottom: "24px" }}>
      <Form.Group>
        <Form.Label>주문회원</Form.Label>
        <Form.Control as="select">
          <option value="">회원선택</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>상품명</Form.Label>
        <Form.Control as="select">
          <option value="">상품선택</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>주문수량</Form.Label>
        <Form.Control type="number" placeholder="주문 수량을 입력하세요" />
      </Form.Group>
      <Button>Submit</Button>
    </Form>
  );
};

export default OrderPage;
