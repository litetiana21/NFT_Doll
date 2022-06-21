
export type TScreenState = "LOADING" | "CONNECT" | "HOME" | "CRAYON" | "WELCOME" | "DEFAULT" | "GAMES" | "PASSWORD" | string;

export interface IScreenState{
    screen: TScreenState,
    loadTime: number,
}
