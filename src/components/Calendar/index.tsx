import React from 'react';
import { useTheme } from 'styled-components';
import {Feather} from '@expo/vector-icons';

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
}
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => 
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction==='left' ? 'chevron-left' : 'chevron-right'}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -10
        }
      }}

      firstDay={1}
      minDate={new Date()}
    />
  );
}