import React, { FC, memo } from 'react';
import ShieldOutlineSvg from '../svg/shield-outline.svg';

export interface IShieldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldOutlineIcon: FC<IShieldOutlineIconProps> = memo(props => {
  return <ShieldOutlineSvg {...props} />;
});
