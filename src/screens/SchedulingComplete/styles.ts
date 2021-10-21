import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme})=>theme.colors.header};
    padding-top: ${RFValue(96)}px;
  `,
  Content: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  `,
  Title: styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.secondary_600};
    margin-top: ${RFValue(40)}px;
  `,
  Message: styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.text_details};
    font-family: ${({theme})=>theme.fonts.primary_400};
    margin: ${RFValue(16)}px 0 ${RFValue(60)}px;
    text-align: center;
    line-height: ${RFValue(25)}px;
  `,
  Footer: styled.View`
    width: 20%;
    margin-bottom: ${RFValue(80)}px;
  `,
}