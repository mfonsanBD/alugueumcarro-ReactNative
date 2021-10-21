import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import S from './styles';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleSuccess = () => {
    navigation.navigate('Home');
  }
  return (
    <S.Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <LogoSvg width={width} />

      <S.Content>
        <DoneSvg width={80} height={80} />

        <S.Title>Carro alugado!</S.Title>

        <S.Message>
          Agora você só precisa ir {'\n'}
          a uma loja ALUGUE UM CARRO {'\n'}
          pegar o seu automóvel
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="OK" onPress={handleSuccess}/>
      </S.Footer>

    </S.Container>
  );
}