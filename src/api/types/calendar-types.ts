export type FieldsRecordType = {
    annee: string;
    date: string;
    jour: string;
    jour_code: number;
    jour_et_date: string;
    statut: string;
};
export type CalendarRecordsType = {
    datasetid: string;
    fields: FieldsRecordType;
    record_timestamp: string;
    recordid: string;
};

export type CalendarResponseType = {
    records: CalendarRecordsType[];
    facet_groups: {
        facets: [
            {
                name: string;
                count: number;
                state: string;
                path: string;
            },
        ];
    };
    nhits: number;
    parameters: {
        dataset: string;
        facet: string[];
        format: string;
        rows: number;
        start: number;
        timezone: string;
    };
};
