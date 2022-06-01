import { Module } from '@nestjs/common';
import { MarketplaceModule } from '../marketplace/marketplace.module';
import { EmbedController } from './embed.controller';
import { EmbedService } from './embed.service';
import { GameModule } from '../../shared/game/game.module';

@Module({
  imports: [MarketplaceModule, GameModule],
  providers: [EmbedController, EmbedService],
  exports: [EmbedController],
})
export class EmbedModule {}
