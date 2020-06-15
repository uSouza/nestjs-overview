import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeadService } from '../infrastructure/lead.service';
import { Lead } from '../domain/entity/lead.entity';
import { CreateLeadDto } from '../domain/dto/createLead.dto';

@Controller('lead')
export class LeadController {
  constructor(private leadService: LeadService) { }

  @Post()
  create(@Body() data: CreateLeadDto): Promise<Lead> {
    return this.leadService.create(data);
  }

  @Get()
  async findAll(): Promise<Lead[]> {
    return this.leadService.findAll();
  }
}
