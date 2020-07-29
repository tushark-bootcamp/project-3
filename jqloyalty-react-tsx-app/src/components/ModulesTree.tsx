import * as React from 'react';
import JqxTree, { ITreeProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
import AppLayout from './../pages/AppLayout';

interface Props {
    moduleName: string;
}

//class ModulesTree: React.FC<Props> extends React.PureComponent<{}, ITreeProps> {
class ModulesTree extends React.PureComponent < {moduleName: string}, ITreeProps > {

    private modulesTree = React.createRef<JqxTree>();
    //private myPanel = React.createRef<AppLayout>();

    constructor(props: {moduleName: string}) {
        super(props);
        this.props.moduleName = "";
        this.moduleOnSelect = this.moduleOnSelect.bind(this);

        //const [selectedModule, setSelectedModule] = useState('');

        const source = [{
            expanded: true,
            icon: './../assets/images/folder.jpg',
            items: [{
                expanded: true,
                icon: './../assets/images/folder.jpg',
                items: [{
                    icon: './../assets/images/lylty.png',
                    label: 'admin'
                }, {
                    icon: './../assets/images/lylty.png',
                    label: 'campaigns'
                }],
                label: 'Modules'
            }],
            label: 'LoyaltyWorks'
        }];

        //this.modulesTree.current?.selectItem(this.modulesTree.current.selectItem(this.modulesTree.current.));
        //var selectedModule = this.modulesTree.current!.getSelectedItem();

        const module = [
            { id: "mod1", name: "" }
        ];
        //props.appModule.name = 

        //props.onModuleSelect(selectedModule);

        this.state = {
            source: source
        }
    }
    public render() {
        return (
            <JqxTree
                ref={this.modulesTree}
                width={'100%'}
                height={'100%'}
                source={this.state.source}
                onSelect={this.moduleOnSelect}
            />
        );
    }

    private moduleOnSelect(event: any): void {
        const args = event.args;
        const item = this.modulesTree.current!.getItem(args.element);
        alert("module :" + item.label);

        //this.myPanel.current!.;
    }
}
export default ModulesTree;