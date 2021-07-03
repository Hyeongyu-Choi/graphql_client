import { Button, Form } from "react-bootstrap";

const ItemsFormPage = () => {
  return (
    <Form style={{ marginBottom: "24px" }}>
      <Form.Group>
        <Form.Label>상품명</Form.Label>
        <Form.Control placeholder="이름을 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>가격</Form.Label>
        <Form.Control type="number" placeholder="가격을 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>수량</Form.Label>
        <Form.Control type="number" placeholder="수량을 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>저자</Form.Label>
        <Form.Control placeholder="저자를 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>ISBN</Form.Label>
        <Form.Control placeholder="ISBN을 입력하세요" />
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default ItemsFormPage;
