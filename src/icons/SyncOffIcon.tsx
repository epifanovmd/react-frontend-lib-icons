import React, { FC, memo } from 'react';
import SyncOffSvg from '../svg/sync-off.svg';

export interface ISyncOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyncOffIcon: FC<ISyncOffIconProps> = memo(props => {
  return <SyncOffSvg {...props} />;
});
