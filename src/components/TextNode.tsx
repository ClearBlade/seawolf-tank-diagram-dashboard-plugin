import { makeStyles } from '@material-ui/core';
import { memo } from 'react';

const useTextNodeStyles = makeStyles((theme) => ({
  textCard: {
    padding: theme.spacing(2),
    width: '220px',
    height: '150px',
    display: 'flex',
    border: `1px solid ${theme.palette.text.secondary}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
}));

const TextNode = ({
  data,
  handles,
}: {
  data: { label: string | JSX.Element };
  handles?: React.ReactNode;
}) => {
  const classes = useTextNodeStyles();
  return (
    <>
      <div className={classes.textCard}>{data.label}</div>
      {handles}
    </>
  );
};

export default memo(TextNode);
