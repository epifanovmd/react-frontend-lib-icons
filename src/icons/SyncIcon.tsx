import React, { FC, memo } from 'react';
import SyncSvg from '../svg/sync.svg';

export interface ISyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyncIcon: FC<ISyncIconProps> = memo(props => {
  return <SyncSvg {...props} />;
});
