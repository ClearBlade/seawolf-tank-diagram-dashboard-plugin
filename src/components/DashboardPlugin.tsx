import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useRef, useState } from 'react';
import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';
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

  const hardcodedisloading = false; //GET BACK TO THESE BASED ON REACT QUERY FETCHES
  const hardcodederror = false;

  if (hardcodedisloading) return <Skeleton />;
  if (hardcodederror) return <div>Error</div>;

  const nodeTypes = {
    tankNode: TankNode,
    textNode: TextNode,
  };

  const nodes = [
    {
      id: '1',
      type: 'textNode',
      position: { x: 0, y: 0 },
      data: { label: 'MY LABEL1' },
    },
    {
      id: '2',
      type: 'textNode',
      position: { x: 200, y: 0 },
      data: { label: 'MY LABEL2' },
    },
    {
      id: '3',
      type: 'tankNode',
      position: { x: 400, y: 0 },
      data: { label: '' },
    },
  ];
  const edges = [{ id: 'e1-2', source: '1', target: '2' }];

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
        />
      </div>
    </div>
  );
}
