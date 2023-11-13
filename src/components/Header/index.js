import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { ButtonIcon, Container, Title } from "./styles";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={26} color={"#fff"} />
      </ButtonIcon>
      <Title>{title}</Title>
    </Container>
  );
}
