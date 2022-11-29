import React, { FC, memo } from 'react';
import ShieldKeyOutlineSvg from '../svg/shield-key-outline.svg';

export interface IShieldKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldKeyOutlineIcon: FC<IShieldKeyOutlineIconProps> = memo(props => {
  return <ShieldKeyOutlineSvg {...props} />;
});
