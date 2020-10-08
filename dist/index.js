import Plugin from '../../src/core/Plugin'
import datasourceDefinition from './datasource.definition'
import contextMenu from './menu'
export default class PluginInstaller extends Plugin{

    constructor(api, context){
        super(api, context)
        api.store.datasourceManager.addDatasourceDefinition(datasourceDefinition, context.pluginDir);
        api.store.registerContextMenu(contextMenu);
    }

    getPluginsAvailable(){

    }

    downloadPlugin(pluginName){
        
    }

    installPlugin(tgzPath){ 

    }



}






