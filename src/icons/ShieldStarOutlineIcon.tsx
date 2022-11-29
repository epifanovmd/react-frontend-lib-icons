import React, { FC, memo } from 'react';
import ShieldStarOutlineSvg from '../svg/shield-star-outline.svg';

export interface IShieldStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldStarOutlineIcon: FC<IShieldStarOutlineIconProps> = memo(props => {
  return <ShieldStarOutlineSvg {...props} />;
});
