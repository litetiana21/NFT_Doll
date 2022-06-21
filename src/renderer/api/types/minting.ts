export type TmintingState = "VERIFYING" | "INITIALIZED" | "NO_APES" | "FAILED" | "RESERVING" | "CONFIRMED" | "MINTING_APE" | "COMPLETED" | "NONE" | string;

export interface IMintingState{
    mintingState: TmintingState
}