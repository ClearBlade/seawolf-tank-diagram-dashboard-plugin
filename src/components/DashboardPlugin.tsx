import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const usePluginStyles = makeStyles((theme) => ({
  plugin: {
    marginTop: theme.spacing(1),
  },
}));

export default function DashboardPlugin() {
  const classes = usePluginStyles();
  // const { data, isLoading, error } = useFetchAssetByType(ClientTypeId);
  const isLoading = false;
  const error = false;

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error</div>;

  return <div className={classes.plugin}>content here</div>;
}
