import { Row, Span, Col, UiElement, Div } from '@earnkeeper/ekp-sdk';

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
    context: `$.data[${documentIndex}]`,
    children: [
      Span({
        content: '$.name',
      }),
    ],
  });
}
