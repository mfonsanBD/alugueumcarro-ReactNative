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
    margin-top: ${getStatusBarHeight() + RFValue(25)}px;
  `,
  Content: styled.ScrollView.attrs({
    contentContainerStyle: {
      paddingLeft: 24,
      paddingRight: 24,
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
  RentalPeriod: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: ${RFValue(30)}px 0;
    padding-bottom: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=>theme.colors.line};
  `,
  CalendarIcon: styled.View`
    width: 50px;
    height: 50px;
    background-color: ${({theme})=>theme.colors.main};
    justify-content: center;
    align-items: center;
  `,
  DateInfo: styled.View`
    width: 30%;
  `,
  DateTitle: styled.Text`
    color: ${({theme})=>theme.colors.text_details};
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  DateValue: styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
  `,
  RentalPrice: styled.View`
    width: 100%;
  `,
  RentalLabel: styled.Text`
    color: ${({theme})=>theme.colors.text_details};
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  RentalDetails: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  RentalQuota: styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
  `,
  RentalPriceTotal: styled.Text`
    color: ${({theme})=>theme.colors.success};
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(24)}px;
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