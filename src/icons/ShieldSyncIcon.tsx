import React, { FC, memo } from 'react';
import ShieldSyncSvg from '../svg/shield-sync.svg';

export interface IShieldSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSyncIcon: FC<IShieldSyncIconProps> = memo(props => {
  return <ShieldSyncSvg {...props} />;
});
