import { MarkerType } from 'reactflow';
import { v4 as uuid } from 'uuid';

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
