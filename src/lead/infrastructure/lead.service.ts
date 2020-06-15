import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from '../domain/entity/lead.entity';
import { CreateLeadDto } from '../domain/dto/createLead.dto';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>,
  ) {}

  findAll(): Promise<Lead[]> {
    return this.leadsRepository.find();
  }

  findOne(id: string): Promise<Lead> {
    return this.leadsRepository.findOne(id);
  }

  async create(data: CreateLeadDto): Promise<any> {
    const result = await this.leadsRepository.insert(data)
    return this.findOne(result.raw.insertId);
  }

  async remove(id: string): Promise<void> {
    await this.leadsRepository.delete(id);
  }
}
