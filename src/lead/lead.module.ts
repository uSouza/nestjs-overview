import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadController } from './application/lead.controller'
import { LeadService } from './infrastructure/lead.service'
import { Lead } from './domain/entity/lead.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  controllers: [LeadController],
  providers: [LeadService],
})

export class LeadModule {}
