import React, { FC, memo } from 'react';
import ShieldSyncOutlineSvg from '../svg/shield-sync-outline.svg';

export interface IShieldSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSyncOutlineIcon: FC<IShieldSyncOutlineIconProps> = memo(props => {
  return <ShieldSyncOutlineSvg {...props} />;
});
