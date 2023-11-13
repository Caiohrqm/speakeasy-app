import { useNavigation } from "@react-navigation/native";
import { ButtonIcon, Buttons, Card, Category, Content, Name } from "./styles";
import Icon from "@expo/vector-icons/FontAwesome5";
import { deleteMeeting } from "../../services/firestore";

export default function MeetingCard({ meeting }) {
  const navigation = useNavigation();

  async function remove() {
    deleteMeeting(meeting.id);
  }

  return (
    <Card>
      <Content onPress={() => navigation.navigate("Meeting", meeting)}>
        <Category>{meeting.category}</Category>
        <Name>{meeting.title}</Name>
      </Content>
      <Buttons>
        <ButtonIcon onPress={() => navigation.navigate("EditMeeting", meeting)}>
          <Icon name="pencil-alt" size={24} color={"#ECB80C"} />
        </ButtonIcon>
        <ButtonIcon onPress={remove}>
          <Icon name="trash" size={24} color={"#d15"} />
        </ButtonIcon>
      </Buttons>
    </Card>
  );
}
