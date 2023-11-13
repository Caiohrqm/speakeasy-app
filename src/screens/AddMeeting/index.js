import { Container, Content, Form } from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { Alert } from "react-native";
import { saveMeeting } from "../../services/firestore";

export default function AddMeeting({ navigation }) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function save() {
    if (category == "" || title == "") {
      Alert.alert(
        "Erro",
        "Os campos de categoria e título devem estar preenchidos!"
      );
      return;
    }

    const meeting = {
      category,
      title,
      description,
    };
    saveMeeting(meeting);
    navigation.pop();
  }

  return (
    <Container>
      <Content>
        <Header title={"Nova Reunião"} />
        <Form>
          <Input label={"Categoria"} setValue={setCategory} value={category} />
          <Input label={"Título"} setValue={setTitle} value={title} />
          <Input
            label={"Descrição"}
            setValue={setDescription}
            value={description}
          />
        </Form>
      </Content>
      <Button title="Criar" onPress={save} />
    </Container>
  );
}
