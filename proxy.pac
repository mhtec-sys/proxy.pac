function FindProxyForURL(url, host) {
    var internalHost = "proxy.mhtec.com.br";
    var directHosts = [
        "*.manage.microsoft.com",
        "*.windowsupdate.com",
        "*.microsoftonline.com",
        "*.msftauth.net",
        "*.msauth.net",
        "*.microsoft.com",
        "*.smd.msft.net",
        "login.live.com",
        "login.microsoftonline.com",
        "*.githubusercontent.com",
    ];
    function isInDirectHosts(host) {
        for (var i = 0; i < directHosts.length; i++) {
            if (shExpMatch(host, directHosts[i])) {
                return true;
            }
        }
        return false;
    }

    if (isInDirectHosts(host)) {
        return "DIRECT";
    }

    if (dnsResolve(internalHost)) {
        return "DIRECT";
    } else {
        return "PROXY 192.168.25.1:3128";
    }
}
