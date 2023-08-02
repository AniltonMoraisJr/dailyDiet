import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Body, Container } from './styles';
import Header from '@components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { MealDTO } from '@domains/MealDTO';
import InputControll from '@components/InputControll';
import Button from '@components/Button';

const NewMeal: React.FC = () => {
    const navigate = useNavigation()

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<MealDTO>({
      defaultValues: {
        name: "",
        description: "",
        date: "",
        hour: ""
      },
    })

    const onSubmit = handleSubmit(  (data: MealDTO) => {
      console.log(data)
    })
  return <Container>
      <Header title='Nova refeição' handleIconArrowLeft={() => navigate.navigate('home')}/>
      <Body>
        <Controller 
          control={control}
          name='name'
          rules={{
            required: true
          }}
          render={({field: {onChange, value}}) => (
            <InputControll labelText='Nome' value={value} handleChangeText={onChange} />
          )}
        />
        <Controller 
          control={control}
          name='description'
          rules={{
            required: true
          }}
          render={({field: {onChange, value}}) => (
            <InputControll labelText='Descrição' value={value} handleChangeText={onChange} />
          )}
        />
      </Body>
      <SafeAreaView style={{justifyContent: `center`, alignItems: 'center', backgroundColor: '#fff' }}>
        
      <Button width={320} title='Cadastrar refeição' onPress={() => onSubmit()} />
      </SafeAreaView>
  </Container>;
}

export default NewMeal;