import { Container, Field, Label } from "./styles";

export default function Input({ label, setValue, value }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field onChangeText={setValue} value={value} />
    </Container>
  );
}
