import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps{
  color: string;
}

export default {
  Container: styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 19px;
    justify-content: center;
    align-items: center;
    background-color:${({theme, color}) => color ? color : theme.colors.main};
  `,
  Title: styled.Text`
    font-size: ${RFValue(15)}px;
    font-family:${({theme})=>theme.fonts.primary_500};
    color:${({theme})=>theme.colors.background_secondary};
  `,
}