import React from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speed from '../../assets/speed.svg';
import up from '../../assets/up.svg';
import cambio from '../../assets/cambio.svg';
import forca from '../../assets/forca.svg';
import gasolina from '../../assets/gasolina.svg';
import pessoas from '../../assets/pessoas.svg';

import S from './styles';

export function SchedulingDetails(){
  const theme = useTheme();
  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />

      <S.Header>
        <BackButton onPress={()=>{}} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={['https://www.seekpng.com/png/full/673-6737792_lamborghini-urus-3-png.png']}/>
      </S.CarImages>

      <S.Content>
        <S.Details>

          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Urus</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao Dia</S.Period>
            <S.Amount>R$ 580</S.Amount>
          </S.Rent>

        </S.Details>

        <S.Accessories>
          <Accessory name="380km/h" icon={speed}/>
          <Accessory name="3.2s" icon={up}/>
          <Accessory name="800 HP" icon={forca}/>
          <Accessory name="Gasolina" icon={gasolina}/>
          <Accessory name="Auto" icon={cambio}/>
          <Accessory name="2 Pessoas" icon={pessoas}/>
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              size={24}
              color={theme.colors.background_secondary}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>19/10/2021</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={24}
            color={theme.colors.text_details}
          />
          
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>23/10/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalLabel>Total</S.RentalLabel>
          <S.RentalDetails>
            <S.RentalQuota>R$ 580 3x diárias</S.RentalQuota>
            <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
          </S.RentalDetails>
        </S.RentalPrice>

      </S.Content>
      
      <S.Footer>
        <Button title="Alugar Agora" color={theme.colors.success}/>
      </S.Footer>

    </S.Container>
  );
}