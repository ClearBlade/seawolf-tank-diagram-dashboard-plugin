import { makeStyles } from '@material-ui/core';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';

const TankNode = () => {
  return (
    <>
      <Handle type='target' position={Position.Top} />
      <TankShape />
      <Handle type='source' position={Position.Left} />
    </>
  );
};

export default memo(TankNode);

const useTankStyles = makeStyles((theme) => ({
  topOval: {
    border: `1px solid ${theme.palette.text.secondary}`,
    width: '100%',
    height: '30%',
    top: '-15%',
    position: 'absolute',
    borderRadius: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 3,
  },
  rectangle: {
    border: `1px solid ${theme.palette.text.secondary}`,
    height: '100px',
    width: '110px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    zIndex: 2,
  },
  bottomOval: {
    border: `1px solid ${theme.palette.text.secondary}`,
    width: '100%',
    height: '30% !important',
    bottom: '-15%',
    position: 'absolute',
    borderRadius: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 3,
    boxShadow: theme.shadows[1],
  },
  container: {
    height: '130px',
    width: '115px',
    display: 'flex',
    alignItems: 'center',
  },
}));

const TankShape = () => {
  const classes = useTankStyles();

  return (
    <div className={classes.container}>
      <div className={classes.rectangle}>
        <div className={classes.topOval}></div>
        <div className={classes.bottomOval}></div>
      </div>
    </div>
  );
};
