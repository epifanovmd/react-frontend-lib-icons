import React, { FC, memo } from 'react';
import LanPendingSvg from '../svg/lan-pending.svg';

export interface ILanPendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanPendingIcon: FC<ILanPendingIconProps> = memo(props => {
  return <LanPendingSvg {...props} />;
});
