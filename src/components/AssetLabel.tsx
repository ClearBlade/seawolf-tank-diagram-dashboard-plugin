import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
import { Grid, Tooltip, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';
import { AttributeNames, NoAlarmValue } from '../utils';

const useAssetLabelStyles = makeStyles((theme) => ({
  text: {
    overflowWrap: 'break-word',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  icon: {
    marginLeft: theme.spacing(1),
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
  const asset = assets[assetId];
  const alarmStatus = asset?.custom_data?.[AttributeNames.Alarm_Status];
  const hasAlarm = alarmStatus && alarmStatus !== NoAlarmValue;

  return (
    <Grid item>
      <Link to={`/assets/detail/${assetId}`} className={classes.link}>
        <Typography
          variant='body2'
          className={classes.text}
          color={hasAlarm ? 'error' : 'secondary'}
        >
          <b>{asset?.label}</b>
          {hasAlarm && (
            <Tooltip title={`This asset has an alarm: ${alarmStatus}`}>
              <ErrorIcon
                className={classes.icon}
                color='error'
                fontSize='small'
              />
            </Tooltip>
          )}
        </Typography>
      </Link>
    </Grid>
  );
};
