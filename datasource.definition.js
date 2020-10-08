module.exports = {
    name: "ad-datasource",
    caption: "Active Directory",
    shell: "powershell",
    initCommands: [
    ],
    // platform: ['win32', 'linux'],
    columns: [  
        { columnName: 'Display Name', property: 'DisplayName' },
        { columnName: 'Sam Account Name', property: 'SamAccountName' },
        { columnName: 'Enabled', property: 'Enabled' },
    ],
    mainColumnProperty: 'SamAccountName',
    searchFunc: keyword => {
        return `Get-ADUser -Properties samAccountName, displayName, UserPrincipalName, Enabled -Filter "samAccountName -like '*${keyword}*' -or displayName -like '*${keyword}*'" | ConvertTo-Json -Compress`
    },
};
