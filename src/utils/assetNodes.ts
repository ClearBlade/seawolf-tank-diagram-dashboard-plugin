import { MarkerType } from 'reactflow';
import { v4 as uuid } from 'uuid';

const centerHo = 470;
const levelGap = 200;
const horizGap = 200;
const miniGap = 130;

const levelOneNodes = [
  {
    id: '1-0',
    position: { x: 0, y: 0 },
    data: { label: '' },
    type: 'blankNode',
  },
  {
    id: '1-1',
    position: { x: centerHo - horizGap * 1.5, y: 0 },
    data: { label: 'mylabel' },
    type: 'textNodeLeftRight',
  },
  {
    id: '1-2',
    position: { x: centerHo, y: 0 },
    data: { label: 'mylabel' },
    type: 'tankNodeLeftBottom',
  },
  {
    id: '1-3',
    position: { x: centerHo + miniGap, y: 0 },
    data: { label: 'mylabel' },
    type: 'textNode',
  },
];
const levelTwoNodes = [
  {
    id: '2-1',
    position: { x: (centerHo * 2) / 3, y: levelGap },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '2-2',
    position: { x: centerHo * 2 - (centerHo * 2) / 3, y: levelGap },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
];
const levelThreeNodes = [
  {
    id: '3-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 2 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '3-2',
    position: { x: centerHo - horizGap, y: levelGap * 2 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '3-3',
    position: { x: centerHo, y: levelGap * 2 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '3-4',
    position: { x: centerHo + horizGap, y: levelGap * 2 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '3-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 2 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
];
const levelFourNodes = [
  {
    id: '4-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 3 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '4-2',
    position: { x: centerHo - horizGap, y: levelGap * 3 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '4-3',
    position: { x: centerHo, y: levelGap * 3 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '4-4',
    position: { x: centerHo + horizGap, y: levelGap * 3 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
  {
    id: '4-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 3 },
    data: { label: 'mylabel' },
    type: 'textNodeTopBottom',
  },
];
const levelFiveNodes = [
  {
    id: '5-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 4 },
    data: { label: 'mylabel' },
    type: 'tankNodeTop',
  },
  {
    id: '5-2',
    position: { x: centerHo - horizGap, y: levelGap * 4 },
    data: { label: 'mylabel' },
    type: 'tankNodeTop',
  },
  {
    id: '5-3',
    position: { x: centerHo, y: levelGap * 4 },
    data: { label: 'mylabel' },
    type: 'tankNodeTop',
  },
  {
    id: '5-4',
    position: { x: centerHo + horizGap, y: levelGap * 4 },
    data: { label: 'mylabel' },
    type: 'tankNodeTop',
  },
  {
    id: '5-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 4 },
    data: { label: 'mylabel' },
    type: 'tankNodeTop',
  },
];

export const edges = [
  {
    id: uuid(),
    source: '1-0',
    target: '1-1',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '1-1',
    target: '1-2',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '1-2',
    target: '2-1',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '1-2',
    target: '2-2',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-1',
    target: '3-1',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-1',
    target: '3-2',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-1',
    target: '3-3',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-2',
    target: '3-3',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-2',
    target: '3-4',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '2-2',
    target: '3-5',
    type: 'step',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '3-1',
    target: '4-1',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '4-1',
    target: '5-1',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '3-2',
    target: '4-2',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '4-2',
    target: '5-2',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '3-3',
    target: '4-3',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '4-3',
    target: '5-3',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '3-4',
    target: '4-4',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '4-4',
    target: '5-4',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '3-5',
    target: '4-5',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: uuid(),
    source: '4-5',
    target: '5-5',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export const allNodes = [
  ...levelOneNodes,
  ...levelTwoNodes,
  ...levelThreeNodes,
  ...levelFourNodes,
  ...levelFiveNodes,
];

export const assetIds = [
  'DiverDuckAST_FIT700',
  'DiverDuckAST',
  'DiverDuckAST_H2S',
  'DiverDuckAST_FIT500',
  'DiverDuckAST_FIT600',
  'DiverDuckAST_PIT100',
  'DiverDuckAST_FIT100',
  'DiverDuckAST_PIT200',
  'DiverDuckAST_FIT200',
  'DiverDuckAST_PIT300',
  'DiverDuckAST_FIT300',
  'DiverDuckAST_PIT400',
  'DiverDuckAST_FIT400',
  'RedHeadSWD_FIT100',
  'RedHeadSWD_FIT100',
  'BruinSWD_PIT100',
  'BruinSWD_FIT100',
  'RedHeadSWD_LIT100',
  'BruinSWD_LIT100',
  'RedheadSWD_PIT200',
  'RedheadSWD_CV200',
  'BruinSWD_PIT200',
  'BruinSWD_CV200',
];
