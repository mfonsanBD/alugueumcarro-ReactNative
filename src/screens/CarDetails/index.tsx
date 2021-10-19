import React from 'react';

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
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';

export function CarDetails(){
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

        <S.About>
          Este automóvel é desportivo. Surgiu do lendário
          touro de lide indultado da praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </S.About>

      </S.Content>
      
      <S.Footer>
        <Button title="Escolher período do aluguel"/>
      </S.Footer>

    </S.Container>
  );
}