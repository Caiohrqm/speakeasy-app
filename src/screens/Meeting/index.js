import { Category, Container, Content, Description, Form } from "./styles";
import Header from "../../components/Header";

export default function Meeting({ route }) {
  return (
    <Container>
      <Header title={route?.params?.title} />
      <Category>{route?.params?.category}</Category>
      <Description>
        {route?.params?.description || "Nenhuma descrição registrada"}
      </Description>
    </Container>
  );
}
