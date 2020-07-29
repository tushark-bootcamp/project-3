import * as React from 'react';
import JqxTree, { ITreeProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
import AppLayout from './../pages/AppLayout';

// Note: The dataAdapter has not worked somehow.
class ModulesDataTree extends React.PureComponent<{}, ITreeProps> {
    private myTree = React.createRef<JqxTree>();
    //private myPanel = React.createRef<AppLayout>();

    constructor(props: {}) {
        super(props);
        this.myTreeOnSelect = this.myTreeOnSelect.bind(this);
        const data = [
            {
                "id": "1",
                "parentid": "1",
                "text": "Loyalty Works",
                "value": "lylty-works",
                "image": "./../assets/images/folder.jpg"
            }, {
                "id": "2",
                "parentid": "1",
                "text": "Modules",
                "value": "modules",
                "image": "./../assets/images/folder.jpg"
            }, {
                "id": "3",
                "parentid": "2",
                "text": "admin",
                "value": "admin",
                "image": "./../assets/images/lylty.png"
            }, {
                "id": "4",
                "parentid": "2",
                "text": "campaigns",
                "value": "campaigns",
                "image": "./../assets/images/lylty.png"
            }
        ];
        const source = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'value' }
            ],
            datatype: 'json',
            id: 'id',
            localdata: data
            //url: './assets/modulesTree.txt'
        };
        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        const records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }, { name: 'image', map: 'icon' }]);
        
        this.state = {
            source: records
        }
    }
    public render() {
        return (
            <JqxTree
                ref={this.myTree}
                width={'100%'}
                height={'100%'}
                source={this.state.source}
                onSelect={this.myTreeOnSelect}
            />
        );
    }

    private myTreeOnSelect(event: any): void {
        const args = event.args;
        const item = this.myTree.current!.getItem(args.element);
        //this.myPanel.current!.;
    }
}
export default ModulesDataTree;