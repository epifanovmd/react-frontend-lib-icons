import React, { FC, memo } from 'react';
import ShieldCrownOutlineSvg from '../svg/shield-crown-outline.svg';

export interface IShieldCrownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCrownOutlineIcon: FC<IShieldCrownOutlineIconProps> = memo(props => {
  return <ShieldCrownOutlineSvg {...props} />;
});
