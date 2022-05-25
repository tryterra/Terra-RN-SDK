const { NativeModules } = require("react-native");
const { Connections, Permissions } = require("./helpers");
const TerraiOS = NativeModules.TerraiOS;
const TerraAndroid = NativeModules.TerraAndroidReactModule;

function ConnectionToString(connection) {
    switch (connection) {
        case Connections.APPLE_HEALTH:
            return "APPLE_HEALTH";
        case Connections.FREESTYLE_LIBRE:
            return "FREESTYLE_LIBRE";
        default:
            return undefined;
    }
}

function PermissionsToString(permission) {
    switch (permission) {
        case Permissions.ACTIVITY:
            return "ACTIVITY";
        case Permissions.ATHLETE:
            return "ATHLETE";
        case Permissions.BODY:
            return "BODY";
        case Permissions.DAILY:
            return "DAILY";
        case Permissions.NUTRITION:
            return "NUTRITION";
        case Permissions.SLEEP:
            return "SLEEP";
        default:
            return undefined;
    }
}

function initTerra(
    devID,
    apiKey,
    referenceId,
    intervalMinutes,
    connections,
    permissions
) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.initTerra(
                devID,
                apiKey,
                referenceId,
                intervalMinutes,
                connections.map((c) => ConnectionToString(c)),
                permissions.map((p) => PermissionsToString(p))
            );
        case "android":
            return TerraAndroid.initTerra(
                devID,
                apiKey,
                referenceId,
                intervalMinutes,
                connections.map((c) => ConnectionToString(c)),
                permissions.map((p) => PermissionsToString(p))
            );
        default:
            undefined;
    }
}

function deauthTerra(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.deauth(ConnectionToString(connection));
        case "android":
            return undefined;
        default:
            undefined;
    }
}

function checkAuth(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.checkAuth(ConnectionToString(connection));
        case "android":
            return {};
        default:
            undefined;
    }
}

function getBody(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getBody(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return TerraAndroid.getBody(
                ConnectionToString(connection),
                startDate,
                endDate
            );
        default:
            undefined;
    }
}

function getActivity(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getActivity(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return TerraAndroid.getActivity(
                ConnectionToString(connection),
                startDate,
                endDate
            );
        default:
            undefined;
    }
}

function getDaily(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getDaily(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return TerraAndroid.getDaily(
                ConnectionToString(connection),
                startDate,
                endDate
            );
        default:
            undefined;
    }
}

function getSleep(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getSleep(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return TerraAndroid.getSleep(
                ConnectionToString(connection),
                startDate,
                endDate
            );
        default:
            undefined;
    }
}

function getNutrition(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getNutrition(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return TerraAndroid.getNutrition(
                ConnectionToString(connection),
                startDate,
                endDate
            );
        default:
            undefined;
    }
}

function getAthlete(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getAthlete(ConnectionToString(connection));
        case "android":
            return TerraAndroid.getAthlete(ConnectionToString(connection));
        default:
            undefined;
    }
}

function readGlucoseData() {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.readGlucoseData();
        case "android":
            return {};
        default:
            undefined;
    }
}

module.exports = {
    initTerra,
    deauthTerra,
    getActivity,
    getAthlete,
    getBody,
    getNutrition,
    getDaily,
    getSleep,
    readGlucoseData,
    checkAuth,
    Connections,
    Permissions,
};
