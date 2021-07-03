import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomePage from "../HomePage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MembersPage from "../MembersPage";
import MembersFormPage from "../MembersFormPage";
import ItemsPage from "../ItemsPage";
import ItemsFormPage from "../ItemsFormPage";
import OrdersPage from "../OrdersPage";
import OrderPage from "../OrderPage";

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/members" component={MembersPage} />
        <Route exact path="/members/new" component={MembersFormPage} />
        <Route exact path="/items" component={ItemsPage} />
        <Route exact path="/items/new" component={ItemsFormPage} />
        <Route exact path="/orders" component={OrdersPage} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
