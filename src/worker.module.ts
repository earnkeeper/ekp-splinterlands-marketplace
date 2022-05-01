import { EkConfigService, SdkModule } from '@earnkeeper/ekp-sdk-nestjs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketplaceModule } from './feature/marketplace/marketplace.module';

export const MODULE_DEF = {
  imports: [
    MongooseModule.forRootAsync({ useClass: EkConfigService }),
    MarketplaceModule,
    SdkModule,
  ],
};

@Module(MODULE_DEF)
export class WorkerModule {}
