import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Body, Container, RowTwoColumns } from "./styles";
import Header from "@components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { MealDTO } from "@domains/MealDTO";
import InputControll from "@components/InputControll";
import Button from "@components/Button";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
      date: "",
      hour: "",
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
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}} behavior="padding">
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
      </Body>
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
