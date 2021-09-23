import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background_primary};
  `,
  Header: styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    padding: 30px;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({theme})=>theme.colors.header};
  `,
  HeaderContent: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  CountItems: styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme})=>theme.fonts.primary_400};
    color: ${({theme})=>theme.colors.text};
  `,
  CarList: styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingHorizontal: 30,
      paddingTop: 30
    }
  })``,
}