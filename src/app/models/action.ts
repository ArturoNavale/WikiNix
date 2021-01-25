export interface Action {
  actionType: string;
  target: string;
  textToAdd?: string;
  textToReplace?: string;
  textToReplaceWith?: string;
}
