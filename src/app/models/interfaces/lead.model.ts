import { LeadCategory } from './lead-category.model';
import { User } from './user.model';

import { LeadPriority } from '../enums/lead-priority.enum';
import { LeadSource } from '../enums/lead-source.enum';
import { LeadStatus } from '../enums/lead-status.enum';

export interface Lead {

  leadId?: number;

  customerName: string;

  phoneNo: string;

  email?: string;

  category: LeadCategory;

  city?: string;

  address?: string;

  leadSource: LeadSource;

  assignedTo: User;

  status: LeadStatus;

  priority: LeadPriority;

  createdDate: string;

}