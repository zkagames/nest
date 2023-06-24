
export type TableRow = Record<string, any>;

export type TableConfig = {
    columns: Array<{id:string,displayName:string, width?: number, 
    render?:(row: TableRow)=> JSX.Element}>
    };

export type SortOrder = 'asc' | 'desc';

export type TableFilters = {
    sort_by: string;
    sort_order: SortOrder;
} & Record<string, string>