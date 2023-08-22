import { makeStyles } from '@material-ui/core';
import { memo } from 'react';

const useFloatingTextNodeStyles = makeStyles((theme) => ({
  textCard: {
    padding: theme.spacing(2),
    width: '220px',
    height: '150px',
    display: 'flex',
  },
}));

const FloatingTextNode = ({
  data,
  handles,
}: {
  data: { label: string | JSX.Element };
  handles?: React.ReactNode;
}) => {
  const classes = useFloatingTextNodeStyles();
  return (
    <>
      <div className={classes.textCard}>{data.label}</div>
      {handles}
    </>
  );
};

export default memo(FloatingTextNode);
