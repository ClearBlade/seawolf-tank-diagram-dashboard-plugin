import { useAssetTypesCache } from '@clearblade/ia-mfe-react';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ReactFlow, { Handle, Position } from 'reactflow';
import { useFetchAssetsByIds } from '../api';
import { NodeTypes, allNodes, assetIds, edges } from '../utils';
import TankNode from './TankNode';
import TextNode from './TextNode';
import 'reactflow/dist/style.css';

const usePluginStyles = makeStyles((theme) => ({
  plugin: {
    marginTop: theme.spacing(1),
    width: '100%',
    height: `80vh`, // Hardcoding is not ideal, but otherwise we'd need to access the height of the plugin's container from the main app, because ReactFlow requires a fixed height and width
  },
}));

export default function DashboardPlugin() {
  const classes = usePluginStyles();
  const {
    data: assetsData,
    isLoading: loadingAssets,
    error: errorAssets,
  } = useFetchAssetsByIds(assetIds);
  const {
    data: assetTypeData,
    isLoading: loadingAssetTypes,
    error: errorAssetTypes,
  } = useAssetTypesCache();

  if (loadingAssets || loadingAssetTypes) return <Skeleton />;
  if (errorAssets || errorAssetTypes) return <div>Error</div>;

  const nodeTypes = {
    [NodeTypes.tankNodeTop]: (props) => (
      <TankNode
        {...props}
        handles={
          <>
            <Handle type='target' position={Position.Top} />
          </>
        }
      />
    ),
    [NodeTypes.tankNodeLeftBottom]: (props) => (
      <TankNode
        {...props}
        fitWidth
        handles={
          <>
            <Handle type='target' position={Position.Left} />
            <Handle type='source' position={Position.Bottom} />
          </>
        }
      />
    ),
    [NodeTypes.textNode]: TextNode,
    [NodeTypes.blankNode]: (props) => (
      <div {...props} style={{ height: '10px', width: '10px' }}>
        <Handle type='source' position={Position.Right} />
      </div>
    ),
    [NodeTypes.textNodeTopBottom]: (props) => (
      <TextNode
        {...props}
        handles={
          <>
            <Handle type='target' position={Position.Top} />
            <Handle type='source' position={Position.Bottom} />
          </>
        }
      />
    ),
    [NodeTypes.textNodeLeftRight]: (props) => (
      <TextNode
        {...props}
        handles={
          <>
            <Handle type='target' position={Position.Left} />
            <Handle type='source' position={Position.Right} />
          </>
        }
      />
    ),
  };

  const nodes = allNodes(assetsData.DATA, assetTypeData.DATA);

  return (
    <div className={classes.plugin}>
      <div
        style={{
          width: 'inherit',
          height: 'inherit',
        }}
      >
        <ReactFlow
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView={true}
        />
      </div>
    </div>
  );
}
