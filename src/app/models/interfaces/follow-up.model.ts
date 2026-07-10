import { Lead } from './lead.model';

import { FollowUpStatus } from '../enums/follow-up-status.enum';
import { FollowUpType } from '../enums/follow-up-type.enum';

export interface FollowUp {

  followUpId?: number;

  lead: Lead;

  followUpDate: string;

  followUpType: FollowUpType;

  followUpStatus: FollowUpStatus;

  remarks?: string;

}