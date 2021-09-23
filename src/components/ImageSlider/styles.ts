import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface ImageIndexProps{
  active: boolean;
}

export default {
  Container: styled.View`
    width: 100%;
  `,
  ImageIndexes: styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
  `,
  ImageIndex: styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin: 0 4px;
    background-color:${({theme, active}) => active 
      ? theme.colors.title 
      : theme.colors.shape
    };
  `,
  CarImageWrapper: styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  `,
  CarImage: styled.Image`
    width: 280px;
    height: 132px;
  `,
}