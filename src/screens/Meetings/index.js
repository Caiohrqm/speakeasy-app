import { Container, List, Title } from "./styles";
import { useEffect, useState } from "react";
import MeetingCard from "../../components/MeetingCard";
import Button from "../../components/Button";
import { getMeetings } from "../../services/firestore";

export default function Meeting({ navigation }) {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    getMeetings(setMeetings);
  }, []);

  return (
    <Container>
      <Title>Minhas Reuniões</Title>
      <Button
        title="Nova Reunião"
        onPress={() => navigation.navigate("AddMeeting")}
      />
      <List
        data={meetings}
        renderItem={({ item }) => {
          return <MeetingCard meeting={item} />;
        }}
      />
    </Container>
  );
}
