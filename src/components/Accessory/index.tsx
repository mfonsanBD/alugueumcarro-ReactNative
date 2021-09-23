import React from 'react';
import { SvgProps } from 'react-native-svg';

import S from './styles';

interface Props{
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({name, icon:Icon}: Props){
  return (
    <S.Container>
      <Icon width={32} height={32} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}