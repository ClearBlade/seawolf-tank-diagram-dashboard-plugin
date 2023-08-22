import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { Grid } from '@material-ui/core';
import { AssetLabel } from '../components/AssetLabel';
import { AttributeValues } from '../components/AttributeValues';
import { CbDictionary } from '../types';
import { AssetIds } from './assetIds';
import { AttributeNames } from './attributeIds';
import { NodeTypes } from './nodeTypes';

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
          <AssetLabel assets={assets} assetId={AssetIds.DiverDuckAST_FIT700} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.DiverDuckAST_FIT700}
            attributeNames={[AttributeNames.Rate, AttributeNames.Total]}
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
          <AssetLabel assets={assets} assetId={AssetIds.DiverDuckAST_T100} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.DiverDuckAST_T100}
            attributeNames={[AttributeNames.Tank_Level]}
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
          <AssetLabel assets={assets} assetId={AssetIds.DiverDuckAST_H2S} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.DiverDuckAST_H2S}
            attributeNames={[AttributeNames.Alarm_Status]}
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
          <AssetLabel assets={assets} assetId={AssetIds.DiverDuckAST_FIT500} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.DiverDuckAST_FIT500}
            attributeNames={[AttributeNames.Rate]}
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
          <AssetLabel assets={assets} assetId={AssetIds.DiverDuckAST_FIT600} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.DiverDuckAST_FIT600}
            attributeNames={[AttributeNames.Rate]}
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
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_PIT100}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_PIT100}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_FIT100}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_FIT100}
              attributeNames={[AttributeNames.Rate]}
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
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_PIT200}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_PIT200}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_FIT200}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_FIT200}
              attributeNames={[AttributeNames.Rate]}
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
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_PIT300}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_PIT300}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_FIT300}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_FIT300}
              attributeNames={[AttributeNames.Rate]}
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
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_PIT400}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_PIT400}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel
              assets={assets}
              assetId={AssetIds.DiverDuckAST_FIT400}
            />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.DiverDuckAST_FIT400}
              attributeNames={[AttributeNames.Rate]}
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
          <AssetLabel assets={assets} assetId={AssetIds.RedHeadSWD_FIT100} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.RedHeadSWD_FIT100}
            attributeNames={[AttributeNames.Rate, AttributeNames.Total]}
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
            <AssetLabel assets={assets} assetId={AssetIds.BruinSWD_PIT100} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.BruinSWD_PIT100}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid container item direction='column'>
            <AssetLabel assets={assets} assetId={AssetIds.BruinSWD_FIT100} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.BruinSWD_FIT100}
              attributeNames={[AttributeNames.Rate, AttributeNames.Total]}
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
          <AssetLabel assets={assets} assetId={AssetIds.RedHeadSWD_LIT100} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.RedHeadSWD_LIT100}
            attributeNames={[AttributeNames.Tank_Level]}
          />
        </Grid>
      ),
      textBox: (
        <Grid container direction='column' justifyContent='center' spacing={1}>
          <Grid item>
            <AssetLabel assets={assets} assetId={AssetIds.RedHead_SWD_PIT200} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.RedHead_SWD_PIT200}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid item>
            <AssetLabel assets={assets} assetId={AssetIds.RedHeadSWD_CV200} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.RedHeadSWD_CV200}
              attributeNames={[AttributeNames.Valve_Position]}
            />
          </Grid>
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
          <AssetLabel assets={assets} assetId={AssetIds.BruinSWD_LIT100} />
          <AttributeValues
            assets={assets}
            assetTypeDict={assetTypeDict}
            assetId={AssetIds.BruinSWD_LIT100}
            attributeNames={[AttributeNames.Tank_Level]}
          />
        </Grid>
      ),
      textBox: (
        <Grid container direction='column' justifyContent='center' spacing={1}>
          <Grid item>
            <AssetLabel assets={assets} assetId={AssetIds.BruinSWD_PIT200} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.BruinSWD_PIT200}
              attributeNames={[AttributeNames.Pressure]}
            />
          </Grid>
          <Grid item>
            <AssetLabel assets={assets} assetId={AssetIds.BruinSWD_CV200} />
            <AttributeValues
              assets={assets}
              assetTypeDict={assetTypeDict}
              assetId={AssetIds.BruinSWD_CV200}
              attributeNames={[AttributeNames.Valve_Position]}
            />
          </Grid>
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
