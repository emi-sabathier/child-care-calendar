import { CalendarRecordsType } from '../api/types/calendar-types';
import { Day } from '../models/Day';

export const calendarDataFormatter = (data: CalendarRecordsType[] | undefined) => {
    return data?.map((record: CalendarRecordsType): Day => {
        const { fields } = record;
        return {
            year: fields.annee,
            date: fields.date,
            day: fields.jour,
            dayPosition: fields.jour_code,
            dayAndDate: fields.jour_et_date,
            statut: fields.statut,
        };
    });
};
