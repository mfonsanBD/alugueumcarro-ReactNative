import React from 'react';

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

interface Props{
  data: CarData;
}

export function CardCar({ data }: Props){
  return (
    <S.Container>
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

      <S.CarImage resizeMode="cover" source={{uri: data.thumbnail}}/>
    </S.Container>
  );
}