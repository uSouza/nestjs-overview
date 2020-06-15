import { Lead } from '../entity/lead.entity';
import { IsString } from 'class-validator';

export class CreateLeadDto extends Lead {
  @IsString()
  name: string;

  @IsString()
  email: string;
}
