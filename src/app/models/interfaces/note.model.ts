import { Lead } from './lead.model';
import { User } from './user.model';

export interface Note {

  noteId?: number;

  lead: Lead;

  note: string;

  createdBy: User;

  createdDate: string;

}