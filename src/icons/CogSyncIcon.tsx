import React, { FC, memo } from 'react';
import CogSyncSvg from '../svg/cog-sync.svg';

export interface ICogSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogSyncIcon: FC<ICogSyncIconProps> = memo(props => {
  return <CogSyncSvg {...props} />;
});
