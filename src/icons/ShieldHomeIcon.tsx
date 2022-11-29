import React, { FC, memo } from 'react';
import ShieldHomeSvg from '../svg/shield-home.svg';

export interface IShieldHomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldHomeIcon: FC<IShieldHomeIconProps> = memo(props => {
  return <ShieldHomeSvg {...props} />;
});
