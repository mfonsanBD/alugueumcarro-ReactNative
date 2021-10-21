import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import S from './styles';
import Logo from '../../assets/Logo.svg';
import { CardCar } from '../../components/CardCar';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: "Audi",
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao Dia',
      price: 120,
    },
    thumbnail: 'https://priceinsouthafrica.com/wp-content/uploads/2021/03/Audi-RS5-Coupe-2021-Price-in-South-Africa.png',
  };

  const handleCarDetails = () => {
    navigation.navigate('CarDetails');
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.CountItems>Total de 12 carros</S.CountItems>
        </S.HeaderContent>
      </S.Header>
      <S.CarList
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={item=>String(item)}
        renderItem={({item})=>
          <CardCar
            data={carData}
            onPress={handleCarDetails}
          />
        }
      />
    </S.Container>
  );
}