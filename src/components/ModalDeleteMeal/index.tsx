import React from "react";
import { Modal, View } from "react-native";
import { Container, CustomAlertDialog, CustomAlertDialogTitle } from "./styles";
import Button from "@components/Button";
import { deleteMeal } from "@storage/meals/deleteMeal";
import { useNavigation } from "@react-navigation/native";

type Props = {
  id: number;
  isVisible: boolean;
  openOrHideModal: () => void;
};

const ModalDeleteMeal: React.FC<Props> = ({
  id,
  isVisible,
  openOrHideModal,
}) => {
  const navigate = useNavigation();
  const handleDelete = async () => {
    try {
      await deleteMeal(id);
      openOrHideModal();
      navigate.navigate("home");
    } catch (error) {}
  };
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <Container></Container>
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24 }}
      >
        <CustomAlertDialog>
          <CustomAlertDialogTitle>
            Deseja realmente excluir o registro da refeição?
          </CustomAlertDialogTitle>
          <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
            <Button
              width={148}
              title="Cancelar"
              type="SECONDARY"
              onPress={openOrHideModal}
            />
            <Button
              width={148}
              title="Sim, excluir"
              type="PRIMARY"
              onPress={handleDelete}
            />
          </View>
        </CustomAlertDialog>
      </View>
    </Modal>
  );
};

export default ModalDeleteMeal;
