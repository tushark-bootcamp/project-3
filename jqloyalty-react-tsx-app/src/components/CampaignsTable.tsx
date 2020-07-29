import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class CampaignsTable extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datatype: 'json',
            datafields: [{
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'category', map: 'offer>category',
                type: 'string'
            },
            {
                name: 'type', map: 'offer>type',
                type: 'string'
            }
            ],
            id: 'CampaignID',
            url: './assets/campaigns.txt'
        };

        this.state = {
            columns: [
                { text: 'Campaign Name', dataField: 'name', width: '20%' },
                { text: 'Description', dataField: 'description', cellsAlign: 'left', align: 'left', width: '55%' },
                { text: 'Offer Category', dataField: 'category', align: 'left', cellsAlign: 'left', cellsFormat: 'c2', width: '10%' },
                { text: 'Offer Type', dataField: 'type', cellsAlign: 'left', width: '15%' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }
    public render() {
        return (
            <JqxDataTable
                // @ts-ignore     
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} autoRowHeight={true} sortable={true}
                altRows={true} enableHover={true} editable={true} columnsResize={true}
            />
        );

    }
}

export default CampaignsTable;