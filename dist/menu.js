export default {
    "caption": "AD Users",
    "type": "CONTAINER",
    "children": [
        {
            "description": "Set temporary password to AAAA1111@",
            "caption": "Set temporary password to AAAA1111@",
            "shell": "powershell",
            "type": "COMMAND",
            "platform": "win32",
            "commands": [
                'Set-ADAccountPassword -Identity "#{DistinguishedName}" -Reset -NewPassword (ConvertTo-SecureString -AsPlainText "AAAA1111@" -Force)'
            ]
        },
        {
            "description": "",
            "caption": "Disable AD User",
            "shell": "powershell",
            "type": "COMMAND",
            "platform": "win32",
            "commands": [
                'Disable-ADAccount -Identity "#{DistinguishedName}"'
            ]
        },
        {
            "description": "",
            "caption": "Enable AD User",
            "shell": "powershell",
            "type": "COMMAND",
            "platform": "win32",
            "commands": [
                'Enable-ADAccount -Identity "#{DistinguishedName}"'
            ]
        },
    ]
}