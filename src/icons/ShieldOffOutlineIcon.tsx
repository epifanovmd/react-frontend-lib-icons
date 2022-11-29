import React, { FC, memo } from 'react';
import ShieldOffOutlineSvg from '../svg/shield-off-outline.svg';

export interface IShieldOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldOffOutlineIcon: FC<IShieldOffOutlineIconProps> = memo(props => {
  return <ShieldOffOutlineSvg {...props} />;
});
