import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


// colums
const columns: GridColDef[] =
    [
        // { field: 'id', headerName: 'ID', width: 10 },
        { field: 'ConsumedQuantity', headerName: 'Consumed \n Quantity', width: 150 },
        { field: 'Cost', headerName: 'Cost', width: 110 },
        {
            field: 'Date',
            headerName: 'Date',
            type: 'number',
            width: 120,
        },
        {
            field: 'InstanceId',
            headerName: 'Instance Id',
            sortable: true,
            width: 180,

        },
        {
            field: 'MeterCategory',
            headerName: 'Meter Category',
            sortable: true,
            width: 130,

        },
        {
            field: 'ResourceGroup',
            headerName: 'Resource Group',
            sortable: true,
            width: 160,

        },
        {
            field: 'ResourceLocation',
            headerName: 'Resource Location',
            sortable: true,
            width: 160,

        },
        {
            field: 'Tags',
            headerName: 'Tags',
            sortable: true,
            width: 200,

        },
        {
            field: 'UnitOfMeasure',
            headerName: 'Unit Of Measure',
            sortable: true,
            width: 160,

        },
        {
            field: 'Location',
            headerName: 'Location',
            sortable: true,
            width: 110,


        },
        {
            field: 'ServiceName',
            headerName: 'Service Name',
            sortable: true,
            width: 120,

        },
    ];


export default function DataTable({ data }: any): any {
    // rows
    const rows: any = [
        ...data
    ];
    // rows adding contions
    for (let i = 0; i < rows.length; i++) {
        rows[i].id = i + 1;
        rows[i].Tags = ((Object.values(rows[i].Tags)))
    }

    console.log("Checkpoint:- ", data.length > 200 ? 25 : 10)

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: data.length > 200 ? 25 : 10 },
                    },

                }}

                pageSizeOptions={[25, 10, 5]}
            />
        </div>
    );
}
