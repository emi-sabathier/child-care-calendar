import React, { ReactElement } from 'react';
import './assets/styles/App.css';
import { useFetch } from './hooks/useFetch';
import { CALENDAR_API_URL } from './api/const/api-url';
import { Spinner } from './components/Spinner';
import { calendarDataFormatter } from './utils/calendarDataFormatter';
import { CalendarResponseType } from './api/types/calendar-types';

const App = (): ReactElement => {
    const { data, isLoading } = useFetch<CalendarResponseType>(CALENDAR_API_URL);
    if (!isLoading) {
        calendarDataFormatter(data?.records);
    }
    return <>{isLoading ? <Spinner /> : <p>data chargées</p>}</>;
};

export default App;
