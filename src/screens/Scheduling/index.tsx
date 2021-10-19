import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';

import ArrowSVG from '../../assets/arrow.svg';

import S from './styles';


export function Scheduling(){
  const theme = useTheme();
  return (
    <S.Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
      <S.Header>
        <BackButton onPress={()=>{}} color={theme.colors.shape} />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue selected={false}></S.DateValue>
          </S.DateInfo>

          <ArrowSVG />
          
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={false}></S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" />
      </S.Footer>
    </S.Container>
  );
}