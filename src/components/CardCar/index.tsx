import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import S from './styles';

import Energy from '../../assets/Energy.svg';

interface CarData{
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props extends RectButtonProps{
  data: CarData;
}

export function CardCar({ data, ...rest }: Props){
  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>R$ {data.rent.price}</S.Price>
          </S.Rent>
          <S.Type>
            <Energy />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage resizeMode="contain" source={{uri: data.thumbnail}}/>
    </S.Container>
  );
}