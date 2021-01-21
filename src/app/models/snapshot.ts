import { Action } from 'src/app/models/action';

export interface Snapshot {
  authors: string[];
  audio: any;
  actions: Action[];
}
