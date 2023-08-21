import { Theme, makeStyles } from '@material-ui/core';
import { memo } from 'react';

const useTankStyles = makeStyles<Theme, { fitWidth?: boolean }>((theme) => ({
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
  container: ({ fitWidth }) => ({
    height: '130px',
    width: fitWidth ? '115px' : '170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}));

const TankNode = ({
  handles,
  fitWidth,
}: {
  handles?: React.ReactNode;
  fitWidth?: boolean;
}) => {
  const classes = useTankStyles({ fitWidth });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.rectangle}>
          <div className={classes.topOval}></div>
          <div className={classes.bottomOval}></div>
        </div>
      </div>
      {handles}
    </>
  );
};

export default memo(TankNode);
