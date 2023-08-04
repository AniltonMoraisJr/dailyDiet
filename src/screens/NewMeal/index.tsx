import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { MealDTO } from "@domains/MealDTO";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Body, Container, RowTwoColumns } from "./styles";
import Header from "@components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import InputControll from "@components/InputControll";
import Button from "@components/Button";
import SwitchSelectControll from "@components/SwitchSelectControll";

const NewMeal: React.FC = () => {
  const navigate = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MealDTO>({
    defaultValues: {
      name: "",
      description: "",
      date: new Date(Date.now()).toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      hour: new Date(Date.now()).toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        dateStyle: "short",
      }),
      isOnTheDiet: true,
    },
  });

  const onSubmit = handleSubmit((data: MealDTO) => {
    console.log(data);
  });
  return (
    <Container>
      <Header
        title="Nova refeição"
        handleIconArrowLeft={() => navigate.navigate("home")}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
        >
          <Body>
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <InputControll
                  hasError={!!errors.name}
                  labelText="Nome"
                  value={value}
                  handleChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <InputControll
                  hasError={!!errors.description}
                  labelText="Descrição"
                  value={value}
                  handleChangeText={onChange}
                />
              )}
            />
            <RowTwoColumns>
              <Controller
                control={control}
                name="date"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputControll
                    hasError={!!errors.date}
                    inputType="date"
                    labelText="Data"
                    value={value}
                    handleChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="hour"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <InputControll
                    hasError={!!errors.hour}
                    inputType="time"
                    labelText="Hora"
                    value={value}
                    handleChangeText={onChange}
                  />
                )}
              />
            </RowTwoColumns>
            <Controller
              control={control}
              name="isOnTheDiet"
              render={({ field: { onChange, value } }) => (
                <SwitchSelectControll
                  value={value}
                  labelText="Está dentro da dieta?"
                  handleChangeSelect={onChange}
                />
              )}
            />
          </Body>
        </ScrollView>
      </KeyboardAvoidingView>
      <SafeAreaView
        style={{
          paddingBottom: Platform.OS === "android" ? 27 : 0,
          justifyContent: `center`,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Button
          width={320}
          title="Cadastrar refeição"
          onPress={() => onSubmit()}
        />
      </SafeAreaView>
    </Container>
  );
};

export default NewMeal;
