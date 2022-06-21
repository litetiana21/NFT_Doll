import { TmintingState } from "../../../../../../../../../api/types/minting";

import React from 'react';

export function getMessage(state: TmintingState): string {
    switch (state) {
    case "VERIFYING":
      return "verifiying wallet";
    case "INITIALIZED":
      return "minting fee transaction initiated";
    case "NO_APES":
      return "transaction failed...no more scholaroids remain!"
    case "FAILED":
      return "something went wrong!"
    case "RESERVING":
      return "reserving scholaroid"
    case "CONFIRMED":
      return "minting fee transaction confirmed";
    case "MINTING_APE":
      return "minting scholaroid";

    case "COMPLETED":
      return "Minting completed";
    default:
      return "Please Wait";
  }
}
