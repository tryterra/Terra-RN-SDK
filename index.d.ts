// TODO add types to promises
declare module "terra-react" {
    export enum Permissions {
        "ATHLETE",
        "ACTIVITY",
        "BODY",
        "DAILY",
        "NUTRITION",
        "SLEEP",
    }

    export enum Connections {
        "APPLE_HEALTH",
        "FREESTYLE_LIBRE",
    }

    export function initTerra(
        devID: string,
        apiKey: string,
        referenceId: string,
        intervalMinutes: number,
        connections: Connections[],
        permissions: Permissions[]
    ): Promise<any>;

    export function deauthTerra(connection: Connections): void;

    export function checkAuth(connection: Connections): Promise<any>;

    export function getBody(
        connection: Connections,
        startDate: Date,
        endDate: Date
    ): Promise<any>;

    export function getActivity(
        connection: Connections,
        startDate: Date,
        endDate: Date
    ): Promise<any>;

    export function getAthlete(connection: Connections): Promise<any>;

    export function getDaily(
        connection: Connections,
        startDate: Date,
        endDate: Date
    ): Promise<any>;

    export function getSleep(
        connection: Connections,
        startDate: Date,
        endDate: Date
    ): Promise<any>;

    export function getNutrition(
        connection: Connections,
        startDate: Date,
        endDate: Date
    ): Promise<any>;

    export function readGlucoseData(): Promise<any>;
}
