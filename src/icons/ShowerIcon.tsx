import React, { FC, memo } from 'react';
import ShowerSvg from '../svg/shower.svg';

export interface IShowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShowerIcon: FC<IShowerIconProps> = memo(props => {
  return <ShowerSvg {...props} />;
});
