import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background_secondary};
  `,
  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;
    padding-left: 24px;
  `,
  CarImages: styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  `,
  Content: styled.ScrollView.attrs({
    contentContainerStyle: {
      padding: 24,
      alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
  })``,
  Details: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
  `,
  Description: styled.View``,
  Brand: styled.Text`
    color: ${({theme})=>theme.colors.text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Name: styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-size: ${RFValue(25)}px;
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Rent: styled.View``,
  Period: styled.Text`
    color: ${({theme})=>theme.colors.text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  Amount: styled.Text`
    color: ${({theme})=>theme.colors.main};
    font-size: ${RFValue(25)}px;
    font-family: ${({theme})=>theme.fonts.secondary_500};
  `,
  About: styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme})=>theme.fonts.primary_400};
    text-align: justify;
    margin-top: 24px;
    line-height: ${RFValue(25)}px;
  `,
  Accessories: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;
  `,
  Footer: styled.View`
    width: 100%;
    background-color: ${({theme})=>theme.colors.background_secondary};
    padding: 24px 24px ${getStatusBarHeight()}px;
  `,
}