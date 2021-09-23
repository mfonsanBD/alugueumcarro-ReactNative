import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    width: 109px;
    height: 92px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.background_primary};
    padding: 16px;
    margin-bottom: 8px;
  `,
  Name: styled.Text`
    font-size: ${RFValue(13)}px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.primary_500};
  `,
}