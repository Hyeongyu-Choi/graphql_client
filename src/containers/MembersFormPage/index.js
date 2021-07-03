import { Button, Form } from "react-bootstrap";

const MembersFormPage = () => {
  return (
    <Form style={{ marginBottom: "24px" }}>
      <Form.Group>
        <Form.Label>이름</Form.Label>
        <Form.Control placeholder="이름을 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>도시</Form.Label>
        <Form.Control placeholder="도시를 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>거리</Form.Label>
        <Form.Control placeholder="거리를 입력하세요" />
      </Form.Group>
      <Form.Group>
        <Form.Label>우편번호</Form.Label>
        <Form.Control placeholder="우편번호를 입력하세요" />
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default MembersFormPage;
