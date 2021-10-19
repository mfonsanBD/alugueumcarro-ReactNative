import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface DateValueProps {
  selected: boolean;
}

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background_secondary};
  `,
  Header: styled.View`
    width: 100%;
    height: ${RFValue(325)}px;
    padding: 30px;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.header};
    padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  `,
  Title: styled.Text`
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    margin-top: ${RFValue(24)}px;
  `,
  RentalPeriod: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: ${RFValue(30)}px 0;
  `,
  DateInfo: styled.View`
    width: 30%;
  `,
  DateTitle: styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,
  DateValue: styled.Text<DateValueProps>`
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;

    ${({selected, theme}) => !selected && css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
  `,
  Content: styled.ScrollView.attrs({
    contentContainerStyle: {
      paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
  })``,
  Footer: styled.View`
    padding: 24px;
  `,
}