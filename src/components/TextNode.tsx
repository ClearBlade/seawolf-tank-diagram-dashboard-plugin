import { Card, makeStyles } from '@material-ui/core';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';

const useTextNodeStyles = makeStyles((theme) => ({
  textCard: {
    padding: theme.spacing(2),
    width: '100px',
    height: '100px',
    display: 'flex',
  },
}));

const TextNode = ({ data }: { data: { label: string } }) => {
  const classes = useTextNodeStyles();
  return (
    <>
      <Handle type='target' position={Position.Top} />
      <Card className={classes.textCard}>{data.label}</Card>
      <Handle type='source' position={Position.Left} />
    </>
  );
};

export default memo(TextNode);
