import * as React from 'react';
//import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import CampaignsTable from '../components/CampaignsTable';
import ModulesTree from '../components/ModulesTree';


class AppLayout extends React.PureComponent {

    //layout = [];

    constructor(props: {moduleName: any}) {
        super(props);

        const appModule = { id: "mod1", name: "" };

        const modulesExplTree = {
            title: 'Modules Explorer',
            type: 'layoutPanel',
            contentContainer: 'ModulesExplorerPanel',
            height: "100%",
            initContent: (): void => {
                ReactDOM.render(<ModulesTree moduleName={this.moduleNameHandler.bind(this, "")} />, document.getElementById('modulesExplorerTree'));
                //ReactDOM.render(<ModulesTree />, document.getElementById('modulesExplorerTree'));
            }
        };

        const campaignsModule = {
            title: "View Campaigns",
            contentContainer: "CampaignsTablePanel",
            type: "documentPanel",
            initContent: (): void => {
                ReactDOM.render(<CampaignsTable />, document.getElementById('CampaignsTableElem'));
            }
        }

        const adminModule = {
            title: "Admin",
            contentContainer: "CampaignsTablePanel",
            type: "documentPanel",
            initContent: (): void => {
                ReactDOM.render(<CampaignsTable />, document.getElementById('CampaignsTableElem'));
            }
        }

        //const [currentModule, selectedModule] = useState([campaignsModule]);

        var layout = [
            {
                // the 'layout' JSON array defines the internal structure of the layout
                // The sequence is always layoutGroup --> tabbedGroup --> layoutPanel OR 
                // if its a documentGroup
                // layoutGroup --> documentGroup --> documentPanel
                // The layoutGroup has the orientation which tells whether to add child tabs (panels) in
                // verticle fashion or hoizontal fashion.
                // Main panel
                type: "layoutGroup",
                // Horrizontal orientation determines the layout of Application Menu explorer panel and the application function panel groups e.g. offer allocation
                orientation: "horizontal",
                width: "100%",
                height: "100%",
                items: [
                    {
                        // layout[0].items[0]
                        // Menu explorer panel: Left parent panel (layout-group) that holds all tabs in left side of the splitter
                        type: "layoutGroup",
                        // Actually the orientation=verticle is not required as there is only one panel in this.items[]
                        orientation: "vertical",
                        allowPin: false,
                        width: "15%",
                        height: "100%",
                        items: [
                            {
                                // layout[0].items[0]
                                // 1st and the only Tab panel for 'Menu explorer jqTree'
                                type: "tabbedGroup",
                                height: "100%",
                                pinnedHeight: 30,
                                items: [
                                    modulesExplTree
                                ],
                            },
                        ],
                    },
                    {
                        // layout[0].items[1]
                        // Application function panel group: Right parent panel (layout-group) for displaying application tabs for selected menu
                        type: "layoutGroup",
                        allowPin: false,
                        width: "85%",
                        height: "100%",
                        items: [
                            {
                                // layout[0].items[1].items[0]
                                // Document group for selected application menu panel
                                type: "documentGroup",
                                height: "100%",
                                pinnedHeight: 30,
                                items: [
                                    // layout[0].items[1].items[0].items[0]
                                    // Initialise with .....
                                    campaignsModule
                                ],
                            }
                        ],
                    }
                ],
            }
        ];
        this.state = {
            layout: layout,
            moduleName: "placeHolder"
        }
    }

    moduleNameHandler = (newModule: string) => {
        console.log("newModuleName in AppLayout: " + newModule);
        this.setState({moduleName: newModule});
    }

    changeModuleHandler(newModule: any) {
        //layout[0].items[1].items[0].items[0] = newModule;
        console.log("something..");
    };

    
    public render() {
        return (
            <JqxLayout
                // @ts-ignore
                width={'100%'} height={850} layout={this.state.layout} contextMenu={true}>
                <div data-container="ModulesExplorerPanel">
                    <div id="modulesExplorerTree" style={{ border: 'none', width: '99%', height: '100%' }} />
                </div>
                <div data-container="CampaignsTablePanel">
                    <div style={{ padding: '5px' }}>
                        <div id="CampaignsTableElem" style={{ margin: '5px' }} />
                    </div>
                </div>
                <div data-container="Document2Panel">
                    <div style={{ padding: '5px' }}>
                        <div id="Document2TextArea" style={{ margin: '5px' }} />
                    </div>
                </div>
            </JqxLayout>
        );
    }

}
export default AppLayout;