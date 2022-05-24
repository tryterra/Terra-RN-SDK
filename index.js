import { NativeModules } from "react-native";
import { Permissions, Connections } from "terra-react";

const TerraiOS = NativeModules.TerraiOS;

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

export function initTerra(
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
            return undefined;
        default:
            undefined;
    }
}

export function deauthTerra(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.deauth(ConnectionToString(connection));
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function checkAuth(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.checkAuth(ConnectionToString(connection));
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function getBody(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getBody(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function getActivity(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getActivity(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function getSleep(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getSleep(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function getNutrition(connection, startDate, endDate) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getNutrition(
                ConnectionToString(connection),
                startDate.toISOString(),
                endDate.toISOString()
            );
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function getAthlete(connection) {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.getAthlete(ConnectionToString(connection));
        case "android":
            return undefined;
        default:
            undefined;
    }
}

export function readGlucoseData() {
    switch (Platform.OS) {
        case "ios":
            return TerraiOS.readGlucoseData();
        case "android":
            return undefined;
        default:
            undefined;
    }
}
