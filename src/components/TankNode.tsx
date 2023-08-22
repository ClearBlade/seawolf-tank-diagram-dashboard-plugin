import { Theme, makeStyles } from '@material-ui/core';
import { memo } from 'react';

const fillColor = '#dae2f1';
const gradient = 5;
const ovalSize = 20;
const ovalOverlap = ovalSize / 2;
const heightRectangleCovers = 100 - ovalOverlap;

const getRectangleFill = (percentFilled?: number) => {
  if (percentFilled <= ovalOverlap) return 0;
  return percentFilled >= heightRectangleCovers
    ? 100
    : (heightRectangleCovers * percentFilled) / 100;
};
const getTopOvalFill = (percentFilled?: number) => {
  // This isn't perfect, because between 89% and 90% there's a large visual jump, but it's the best quick hack I could come up with to fill this type of cylinder
  const half = 100 / 2;
  const percentAboveTheOval = percentFilled - heightRectangleCovers;
  return half + (percentAboveTheOval / ovalOverlap) * half;
};

const getBottomOvalFill = (percentFilled?: number) => {
  // This isn't perfect, because between 10% and 11% there's a large visual jump, but it's the best quick hack I could come up with to fill this type of cylinder
  return percentFilled <= ovalOverlap ? (percentFilled / ovalSize) * 100 : 100;
};

const useTankStyles = makeStyles<
  Theme,
  { fitWidth?: boolean; percentFilled?: number }
>((theme) => ({
  topOval: ({ percentFilled }) => ({
    border: `1px solid ${theme.palette.text.secondary}`,
    width: '100%',
    height: `${ovalSize}%`,
    top: `-${ovalOverlap}%`,
    position: 'absolute',
    borderRadius: '100%',
    backgroundColor:
      percentFilled && percentFilled === 100
        ? fillColor
        : theme.palette.background.paper,

    backgroundImage:
      percentFilled >= heightRectangleCovers
        ? `linear-gradient(to top, ${fillColor}, ${fillColor} ${getTopOvalFill(
            percentFilled
          )}%, ${theme.palette.background.paper} ${
            getTopOvalFill(percentFilled) + 5
          }%, ${theme.palette.background.paper} 100%)`
        : 'auto',
    zIndex: 3,
  }),
  rectangle: ({ percentFilled }) => ({
    border: `1px solid ${theme.palette.text.secondary}`,
    height: '115px',
    width: '200px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `linear-gradient(to top, ${fillColor}, ${fillColor} ${getRectangleFill(
      percentFilled
    )}%, ${theme.palette.background.paper} ${
      getRectangleFill(percentFilled) + gradient
    }%, ${theme.palette.background.paper} 100%)`,
    zIndex: 2,
    display: 'flex',
  }),
  bottomOval: ({ percentFilled }) => ({
    border: `1px solid ${theme.palette.text.secondary}`,
    width: '100%',
    height: `${ovalSize}% !important`,
    bottom: `-${ovalOverlap}%`,
    position: 'absolute',
    borderRadius: '100%',
    backgroundColor: theme.palette.background.paper,
    backgroundImage: !percentFilled
      ? 'auto'
      : `linear-gradient(to top, ${fillColor}, ${fillColor} ${getBottomOvalFill(
          percentFilled
        )}%, ${theme.palette.background.paper} ${
          getBottomOvalFill(percentFilled) + 5
        }%, ${theme.palette.background.paper} 100%)`,
    zIndex: 3,
    boxShadow: theme.shadows[1],
  }),
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
  data?: {
    label: string | JSX.Element;
    textBox?: string | JSX.Element;
    percentFilled?: number;
  };
}) => {
  const classes = useTankStyles({
    fitWidth,
    percentFilled: data.percentFilled,
  });

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
