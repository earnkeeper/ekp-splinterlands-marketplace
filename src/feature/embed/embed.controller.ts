import {
  ClientConnectedEvent,
  ClientDisconnectedEvent,
  ClientStateChangedEvent,
  RpcEvent,
} from '@earnkeeper/ekp-sdk';
import { AbstractController, ClientService } from '@earnkeeper/ekp-sdk-nestjs';
import { Injectable } from '@nestjs/common';
import { EmbedService } from './embed.service';
import { EmbedDocument } from './ui/embed.document';
import element from './ui/embed.uielement';
import { MarketplaceService } from '../marketplace/marketplace.service';
import { MarketService } from '@/shared/game';

const COLLECTION_NAME = 'embeds';

@Injectable()
export class EmbedController extends AbstractController {
  constructor(
    clientService: ClientService,
    private embedService: EmbedService,
    private marketService: MarketService,
    private marketplaceService: MarketplaceService,
  ) {
    super(clientService);
  }

  async onClientConnected(event: ClientConnectedEvent) {
    // Do nothing
  }

  async onClientStateChanged(event: ClientStateChangedEvent) {
    const currency = event.state.client.selectedCurrency;

    const conversionRate = await this.marketService.getConversionRate(
      'usd-coin',
      currency.id,
    );

    const listings = await this.marketplaceService.getListingDocuments(
      currency,
      conversionRate,
      'All',
      {},
    );

    const documents = await this.embedService.getEmbedDocuments(listings);

    const embed: EmbedDocument = {
      id: 'splinterlands-marketplace-tile',
      size: 'tile',
      element: element(),
      data: documents,
      page: 'marketplace',
    };

    await this.clientService.emitDocuments(event, COLLECTION_NAME, [embed]);
  }

  async onClientRpc(event: RpcEvent) {
    // Do nothing
  }

  async onClientDisconnected(event: ClientDisconnectedEvent) {
    // Do nothing
  }
}
