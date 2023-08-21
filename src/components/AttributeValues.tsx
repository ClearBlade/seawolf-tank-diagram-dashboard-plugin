import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { AttributeNames, NoAlarmValue } from '../utils';

const useAttributeValuesStyles = makeStyles((theme) => ({
  text: {
    overflowWrap: 'break-word',
  },
  redAlarm: {
    color: theme.palette.error.main,
  },
}));

export const AttributeValues = ({
  assets,
  assetTypeDict,
  assetId,
  attributeNames,
}: {
  assets: CbDictionary<string, Asset['frontend']>;
  assetTypeDict: CbDictionary<string, AssetType['frontend']>;
  assetId: string;
  attributeNames: string[];
}) => {
  const classes = useAttributeValuesStyles();
  return (
    <>
      {attributeNames.map((attrName) => {
        const asset = assets[assetId];
        const attribute = assetTypeDict?.[asset?.type]?.schema?.find(
          (s) => s.attribute_name === attrName
        );
        const attrLabel = attribute?.attribute_label;
        const attrVal = asset?.custom_data?.[attrName];
        const attrUnits = attribute?.custom_view_settings?.units;

        return (
          <Grid item key={attrName}>
            <Typography
              variant='body2'
              className={clsx(classes.text, {
                [classes.redAlarm]:
                  attrName === AttributeNames.Alarm_Status &&
                  attrVal &&
                  attrVal !== NoAlarmValue,
              })}
            >
              <b>{attrLabel}:</b> {attrVal} {attrUnits}
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};
