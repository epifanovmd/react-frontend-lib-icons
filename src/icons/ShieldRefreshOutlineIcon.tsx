import React, { FC, memo } from 'react';
import ShieldRefreshOutlineSvg from '../svg/shield-refresh-outline.svg';

export interface IShieldRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldRefreshOutlineIcon: FC<IShieldRefreshOutlineIconProps> = memo(props => {
  return <ShieldRefreshOutlineSvg {...props} />;
});
