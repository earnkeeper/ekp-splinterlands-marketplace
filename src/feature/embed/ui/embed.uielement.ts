import {
  Row,
  Span,
  Col,
  UiElement,
  Div,
  Image,
  Fragment,
  formatCurrency,
  Container,
} from '@earnkeeper/ekp-sdk';

export default function element(): UiElement {
  return Div({
    children: [
      Span({
        className: 'font-medium-2',
        content: 'Most Successful Cards',
      }),
      Row({
        className: 'm-0',
        children: [
          Col({
            className: 'col-12',
            children: [listingRow(0)],
          }),
          Col({
            className: 'col-12',
            children: [listingRow(1)],
          }),
          Col({
            className: 'col-12',
            children: [listingRow(2)],
          }),
        ],
      }),
    ],
  });
}

function listingRow(documentIndex: number) {
  return Row({
    className: 'pt-1 pr-0',
    context: `$.data[${documentIndex}]`,
    children: [
      Col({
        className: 'col-auto',
        children: [
          Image({
            className: 'm-0',
            src: '$.cardArtUrl',
            size: 32,
          }),
        ],
      }),
      Col({
        className: 'pl-0',
        children: [
          Container({
            className: 'ml-0',
            children: [
              Span({
                className: 'font-small-5',
                content: '$.name',
              }),
            ],
          }),
          Span({
            className: 'font-small-3',
            content: '$.battles',
          }),
          Span({
            className: 'font-small-3',
            content: 'Battles',
          }),
        ],
      }),
      Col({
        className: 'text-right',
        children: [
          Container({
            children: [
              Span({
                className: 'text-success font-small-4',
                content: formatCurrency('$.price', '$.fiatSymbol'),
              }),
            ],
          }),
          Span({
            className: 'text-success font-small-3',
            content: 'Win Rate',
          }),
          Span({
            className: 'text-success font-small-3',
            content: '$.winRate',
          }),
        ],
      }),
    ],
  });
}
