import { Container, Content, Form } from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { Alert } from "react-native";
import { editMeeting } from "../../services/firestore";

export default function EditMeeting({ navigation, route }) {
  const [category, setCategory] = useState(route?.params?.category);
  const [title, setTitle] = useState(route?.params?.title);
  const [description, setDescription] = useState(route?.params?.description);

  async function edit() {
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

    editMeeting(route.params.id, meeting);
    navigation.pop();
  }

  return (
    <Container>
      <Content>
        <Header title={"Editar Reunião"} />
        <Form>
          <Input label={"Categoria"} setValue={setCategory} value={category} />
          <Input label={"Título"} setValue={setTitle} value={title} />
          <Input
            label={"Resumo"}
            setValue={setDescription}
            value={description}
          />
        </Form>
      </Content>
      <Button title="Finalizar" onPress={edit} />
    </Container>
  );
}
