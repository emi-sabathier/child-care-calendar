import React from 'react';
import './assets/styles/App.css';
import { useFetch } from './hooks/useFetch';
import { CALENDAR_API_URL } from './const/calendar-api-url';
import { Spinner } from './components/Spinner';

function App() {
    const { data, isLoading } = useFetch(CALENDAR_API_URL);
    console.log('data', data);
    console.log('isLoading', isLoading);

    return <>{isLoading ? <Spinner /> : <p>data chargées</p>}</>;
}

export default App;
