import { config } from '@earnkeeper/ekp-sdk';
import { SdkModule } from '@earnkeeper/ekp-sdk-nestjs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketplaceModule } from './feature/marketplace/marketplace.module';
import { EmbedModule } from './feature/embed/embed.module';

export const MODULE_DEF = {
  imports: [
    MongooseModule.forRoot(
      config('MONGO_URI', {
        default: 'mongodb://localhost:27017/splinterlands',
      }),
    ),
    MarketplaceModule,
    EmbedModule,
    SdkModule,
  ],
};

@Module(MODULE_DEF)
export class WorkerModule {}
