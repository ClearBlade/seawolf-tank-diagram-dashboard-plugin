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
    height: '115px',
    width: '200px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    zIndex: 2,
    display: 'flex',
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
    height: '150px',
    width: fitWidth ? '200px' : '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  innerText: {
    overflowY: 'hidden',
    padding: '16% 5%',
    width: '100%',
    zIndex: 6,
  },
  outerText: ({ fitWidth }) => ({
    width: fitWidth ? '115px' : '220px',
    padding: '5%',
    border: `1px solid ${theme.palette.text.secondary}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    marginTop: '5%',
  }),
}));

const TankNode = ({
  handles,
  fitWidth,
  data,
}: {
  handles?: React.ReactNode;
  fitWidth?: boolean;
  data?: { label: string | JSX.Element; textBox?: string | JSX.Element };
}) => {
  const classes = useTankStyles({ fitWidth });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.rectangle}>
          <div className={classes.innerText}>{data.label}</div>
          <div className={classes.topOval}></div>
          <div className={classes.bottomOval}></div>
        </div>
      </div>
      {data.textBox && <div className={classes.outerText}>{data.textBox}</div>}
      {handles}
    </>
  );
};

export default memo(TankNode);
