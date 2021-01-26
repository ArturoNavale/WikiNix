export interface Action {
  actionType: string;
  target: string;
  // targets?: string[];
  textToAdd?: string;
  textToReplace?: string;
  textToReplaceWith?: string;
}

// export interface Action {
//   actionType: string; "prepare"
//   target: string; "ID VAN ELEMENT"

//   textToAdd?: string;
//   textToReplace?: string;
//   textToReplaceWith?: string;
// }
