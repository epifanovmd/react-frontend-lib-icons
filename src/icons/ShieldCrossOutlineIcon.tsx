import React, { FC, memo } from 'react';
import ShieldCrossOutlineSvg from '../svg/shield-cross-outline.svg';

export interface IShieldCrossOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCrossOutlineIcon: FC<IShieldCrossOutlineIconProps> = memo(props => {
  return <ShieldCrossOutlineSvg {...props} />;
});
