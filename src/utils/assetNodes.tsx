import { MarkerType } from 'reactflow';
import { v4 as uuid } from 'uuid';
import { NodeTypes } from './nodeTypes';
import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
import { Grid, Typography } from '@material-ui/core';
import { AttributeValues } from '../components/AttributeValues';
import { AssetLabel } from '../components/AssetLabel';

const centerHo = 470;
const levelGap = 200;
const horizGap = 240;
const miniGap = 210;

const levelOneNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  {
    id: '1-0',
    position: { x: 0, y: 0 },
    data: { label: '' },
    type: NodeTypes.blankNode,
  },
  {
    id: '1-1',
    position: { x: centerHo - horizGap * 1.5, y: 0 },
    data: {
      label: (
        <Grid container direction='column'>
          <AssetLabel assets={assets} assetId='DiverDuckAST_FIT700' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='DiverDuckAST_FIT700'
            attributeNames={['Rate', 'Total']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.textNodeLeftRight,
  },
  {
    id: '1-2',
    position: { x: centerHo, y: 0 },
    data: {
      label: (
        <Grid container direction='column' justifyContent='center'>
          <AssetLabel assets={assets} assetId='DiverDuckAST' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='DiverDuckAST'
            attributeNames={['Tank_Level']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.tankNodeLeftBottom,
  },
  {
    id: '1-3',
    position: { x: centerHo + miniGap, y: 0 },
    data: {
      label: (
        <Grid container direction='column'>
          <AssetLabel assets={assets} assetId='DiverDuckAST_H2S' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='DiverDuckAST_H2S'
            attributeNames={['Alarm_Status']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.textNode,
  },
];
const levelTwoNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  {
    id: '2-1',
    position: { x: (centerHo * 2) / 3, y: levelGap },
    data: {
      label: (
        <Grid container direction='column'>
          <AssetLabel assets={assets} assetId='DiverDuckAST_FIT500' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='DiverDuckAST_FIT500'
            attributeNames={['Rate']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '2-2',
    position: { x: centerHo * 2 - (centerHo * 2) / 3, y: levelGap },
    data: {
      label: (
        <Grid container direction='column'>
          <AssetLabel assets={assets} assetId='DiverDuckAST_FIT600' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='DiverDuckAST_FIT600'
            attributeNames={['Rate']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
];
const levelThreeNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  {
    id: '3-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 2 },
    data: {
      label: (
        <Grid container direction='column' spacing={1}>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_PIT100' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_PIT100'
              attributeNames={['Pressure']}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_FIT100' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_FIT100'
              attributeNames={['Rate']}
            />
          </Grid>
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '3-2',
    position: { x: centerHo - horizGap, y: levelGap * 2 },
    data: {
      label: (
        <Grid container direction='column' spacing={1}>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_PIT200' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_PIT200'
              attributeNames={['Pressure']}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_FIT200' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_FIT200'
              attributeNames={['Rate']}
            />
          </Grid>
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '3-3',
    position: { x: centerHo, y: levelGap * 2 },
    data: {
      label: (
        <Grid container direction='column' spacing={1}>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_PIT300' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_PIT300'
              attributeNames={['Pressure']}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_FIT300' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_FIT300'
              attributeNames={['Rate']}
            />
          </Grid>
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '3-4',
    position: { x: centerHo + horizGap, y: levelGap * 2 },
    data: {
      label: (
        <Grid container direction='column' spacing={1}>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_PIT400' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_PIT400'
              attributeNames={['Pressure']}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='DiverDuckAST_FIT400' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='DiverDuckAST_FIT400'
              attributeNames={['Rate']}
            />
          </Grid>
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '3-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 2 },
    data: { label: '' },
    type: NodeTypes.textNodeTopBottom,
  },
];
const levelFourNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  {
    id: '4-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 3 },
    data: {
      label: (
        <Grid container direction='column'>
          <AssetLabel assets={assets} assetId='RedHeadSWD_FIT100' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='RedHeadSWD_FIT100'
            attributeNames={['Rate', 'Total']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '4-2',
    position: { x: centerHo - horizGap, y: levelGap * 3 },
    data: {
      label: (
        <Grid container direction='column' spacing={1}>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='BruinSWD_PIT100' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='BruinSWD_PIT100'
              attributeNames={['Pressure']}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId='BruinSWD_FIT100' />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId='BruinSWD_FIT100'
              attributeNames={['Rate', 'Total']}
            />
          </Grid>
        </Grid>
      ),
    },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '4-3',
    position: { x: centerHo, y: levelGap * 3 },
    data: { label: '' },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '4-4',
    position: { x: centerHo + horizGap, y: levelGap * 3 },
    data: { label: '' },
    type: NodeTypes.textNodeTopBottom,
  },
  {
    id: '4-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 3 },
    data: { label: '' },
    type: NodeTypes.textNodeTopBottom,
  },
];
const levelFiveNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  {
    id: '5-1',
    position: { x: centerHo - horizGap * 2, y: levelGap * 4 },
    data: {
      label: (
        <Grid container direction='column' justifyContent='center'>
          <AssetLabel assets={assets} assetId='RedHeadSWD_LIT100' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='RedHeadSWD_LIT100'
            attributeNames={['Tank_Level']}
          />
        </Grid>
      ),
      textBox: (
        <Grid container direction='column' justifyContent='center'>
          <AssetLabel assets={assets} assetId='RedheadSWD_PIT200' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='RedheadSWD_PIT200'
            attributeNames={['Pressure']}
          />
          <AssetLabel assets={assets} assetId='RedheadSWD_CV200' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='RedheadSWD_CV200'
            attributeNames={['Valve_Position']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.tankNodeTop,
  },
  {
    id: '5-2',
    position: { x: centerHo - horizGap, y: levelGap * 4 },
    data: {
      label: (
        <Grid container direction='column' justifyContent='center'>
          <AssetLabel assets={assets} assetId='BruinSWD_LIT100' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='BruinSWD_LIT100'
            attributeNames={['Tank_Level']}
          />
        </Grid>
      ),
      textBox: (
        <Grid container direction='column' justifyContent='center'>
          <AssetLabel assets={assets} assetId='BruinSWD_PIT200' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='BruinSWD_PIT200'
            attributeNames={['Pressure']}
          />
          <AssetLabel assets={assets} assetId='BruinSWD_CV200' />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId='BruinSWD_CV200'
            attributeNames={['Valve_Position']}
          />
        </Grid>
      ),
    },
    type: NodeTypes.tankNodeTop,
  },
  {
    id: '5-3',
    position: { x: centerHo, y: levelGap * 4 },
    data: { label: '' },
    type: NodeTypes.tankNodeTop,
  },
  {
    id: '5-4',
    position: { x: centerHo + horizGap, y: levelGap * 4 },
    data: { label: '' },
    type: NodeTypes.tankNodeTop,
  },
  {
    id: '5-5',
    position: { x: centerHo + horizGap * 2, y: levelGap * 4 },
    data: { label: '' },
    type: NodeTypes.tankNodeTop,
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

export const allNodes = (
  assets: CbDictionary<string, Asset['frontend']>,
  assetTypeDict: CbDictionary<string, AssetType['frontend']>
) => [
  ...levelOneNodes(assets, assetTypeDict),
  ...levelTwoNodes(assets, assetTypeDict),
  ...levelThreeNodes(assets, assetTypeDict),
  ...levelFourNodes(assets, assetTypeDict),
  ...levelFiveNodes(assets, assetTypeDict),
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
