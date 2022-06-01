import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { ListingDocument } from '../marketplace/ui/listing.document';
import { EmbedDataDocument } from './ui/embed-data.document';

@Injectable()
export class EmbedService {
  async getEmbedDocuments(
    listings: ListingDocument[],
  ): Promise<EmbedDataDocument[]> {
    return _.chain(listings)
      .slice(0, 3)
      .map((listing) => {
        return {
          id: listing.id,
          name: listing.name,
        };
      })
      .value();
  }
}
