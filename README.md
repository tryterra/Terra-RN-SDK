# Terra React

A react native bridge for both TerraiOS and TerraAndroid, giving you hustle-free access to all Terra SDKs!

## Available functions

Regardless of Android or iOS, here are the functions available that you can import from `terra-react` (platform check is delt with under the hood):

```ts
// initialise terra with a set of connections and permissions
export function initTerra(
    devID: string,
    apiKey: string,
    referenceId: string,
    intervalMinutes: number,
    connections: Connections[],
    permissions: Permissions[]
): Promise<any>;

// deauth a particular terra connection
export function deauthTerra(connection: Connections): void;

// check a particular terra connection auth
export function checkAuth(connection: Connections): Promise<any>;

// get body data for a connection
export function getBody(
    connection: Connections,
    startDate: Date,
    endDate: Date
): Promise<any>;

// get activity data for a connection
export function getActivity(
    connection: Connections,
    startDate: Date,
    endDate: Date
): Promise<any>;

// get athlete data for a connection
export function getAthlete(connection: Connections): Promise<any>;

// get daily data for a connection
export function getDaily(
    connection: Connections,
    startDate: Date,
    endDate: Date
): Promise<any>;

// get sleep data for a connection
export function getSleep(
    connection: Connections,
    startDate: Date,
    endDate: Date
): Promise<any>;

// get nutrition data for a connection
export function getNutrition(
    connection: Connections,
    startDate: Date,
    endDate: Date
): Promise<any>;

// init freestyle (just for Apple)
export function readGlucoseData(): Promise<any>;
```

## Android

For Android, currently you need to download the library manually from [https://github.com/tryterra/TerraAndroid](https://github.com/tryterra/TerraAndroid), **tag v0.0.1** (unfortunately we still couldn't publish it on Maven for an automatic download with NPM). Then copy the files under /Android from this NPM package into your application directory.

## Typing

Typing is provided in the npm package `terra-api`