import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BattleRepository } from './battle/battle.repository';
import { Battle, BattleSchema } from './battle/battle.schema';
import { Ign, IgnRepository, IgnSchema } from './ign';
import {
  MarketCard,
  MarketCardRepository,
  MarketCardSchema,
} from './market-card';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Battle.name, schema: BattleSchema },
      { name: MarketCard.name, schema: MarketCardSchema },
      { name: Ign.name, schema: IgnSchema },
    ]),
  ],
  providers: [BattleRepository, MarketCardRepository, IgnRepository],
  exports: [BattleRepository, MarketCardRepository, IgnRepository],
})
export class DbModule {}
