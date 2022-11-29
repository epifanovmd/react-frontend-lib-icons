import React, { FC, memo } from 'react';
import CogSyncOutlineSvg from '../svg/cog-sync-outline.svg';

export interface ICogSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogSyncOutlineIcon: FC<ICogSyncOutlineIconProps> = memo(props => {
  return <CogSyncOutlineSvg {...props} />;
});
