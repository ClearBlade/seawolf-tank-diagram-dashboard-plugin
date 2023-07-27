import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ReactFlow, { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { useFetchAssetsByIds } from '../api';
import { allNodes, assetIds, edges } from '../utils';
import TankNode from './TankNode';
import TextNode from './TextNode';

const usePluginStyles = makeStyles((theme) => ({
  plugin: {
    marginTop: theme.spacing(1),
    width: '100%',
    height: `80vh`, // Hardcoding is not ideal, but otherwise we'd need to access the height of the plugin's container from the main app, because ReactFlow requires a fixed height and width
  },
}));

export default function DashboardPlugin() {
  const classes = usePluginStyles();
  const { data, isLoading, error } = useFetchAssetsByIds(assetIds);

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error</div>;
  console.log('data', data);

  const nodeTypes = {
    tankNodeTop: (props) => (
      <TankNode
        {...props}
        handles={
          <>
            <Handle type='target' position={Position.Top} />
          </>
        }
      />
    ),
    tankNodeLeftBottom: (props) => (
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
    textNode: TextNode,
    blankNode: (props) => (
      <div {...props} style={{ height: '10px', width: '10px' }}>
        <Handle type='source' position={Position.Right} />
      </div>
    ),
    textNodeTopBottom: (props) => (
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
    textNodeLeftRight: (props) => (
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
          nodes={allNodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView={true}
        />
      </div>
    </div>
  );
}
