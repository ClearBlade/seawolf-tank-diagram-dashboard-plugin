import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useAssetLabelStyles = makeStyles(() => ({
  text: {
    overflowWrap: 'break-word',
  },
  link: {
    textDecoration: 'none',
  },
}));

export const AssetLabel = ({
  assets,
  assetId,
}: {
  assets: CbDictionary<string, Asset['frontend']>;
  assetId: string;
}) => {
  const classes = useAssetLabelStyles();
  return (
    <Grid item>
      <Link to={`/assets/detail/${assetId}`} className={classes.link}>
        <Typography variant='body2' className={classes.text}>
          <b>{assets[assetId]?.label}</b>
        </Typography>
      </Link>
    </Grid>
  );
};
