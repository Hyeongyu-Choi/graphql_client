import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Jumbotron>
      <h1>HELLO SHOP</h1>
      <p className="lead">회원 기능</p>
      <p>
        <Link to="/members/new">
          <Button variant="secondary" style={{ marginRight: "4px" }}>
            회원 가입
          </Button>
        </Link>
        <Link to="/members">
          <Button variant="secondary">회원 목록</Button>
        </Link>
      </p>
      <p className="lead">상품 기능</p>
      <p>
        <Link to="/items/new">
          <Button variant="dark" style={{ marginRight: "4px" }}>
            상품 등록
          </Button>
        </Link>
        <Link to="/items">
          <Button variant="dark">상품 목록</Button>
        </Link>
      </p>
      <p className="lead">주문 기능</p>
      <p>
        <Link to="/order">
          <Button variant="info" style={{ marginRight: "4px" }}>
            상품 주문
          </Button>
        </Link>
        <Link to="/orders">
          <Button variant="info">주문 내역</Button>
        </Link>
      </p>
    </Jumbotron>
  );
};

export default HomePage;
