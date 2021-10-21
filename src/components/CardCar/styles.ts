import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled(RectButton)`
    width: 100%;
    height: ${RFValue(126)}px;
    background-color: ${({theme})=>theme.colors.background_secondary};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 16px;
  `,
  Details: styled.View``,
  Brand: styled.Text`
    text-transform: uppercase;
    font-size:  ${RFValue(10)}px;
    color: ${({theme})=>theme.colors.text_details};
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Name: styled.Text`
    font-size:  ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  About: styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,
  Rent: styled.View`
    margin-right: 24px;
  `,
  Period: styled.Text`
    text-transform: uppercase;
    font-size:  ${RFValue(10)}px;
    color: ${({theme})=>theme.colors.text_details};
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Price: styled.Text`
    font-size:  ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.main};
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Type: styled.View``,
  CarImage: styled.Image`
    width: 160px;
    height: 92px;
  `,
}