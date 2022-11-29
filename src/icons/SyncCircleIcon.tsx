import React, { FC, memo } from 'react';
import SyncCircleSvg from '../svg/sync-circle.svg';

export interface ISyncCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyncCircleIcon: FC<ISyncCircleIconProps> = memo(props => {
  return <SyncCircleSvg {...props} />;
});
