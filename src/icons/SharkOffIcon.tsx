import React, { FC, memo } from 'react';
import SharkOffSvg from '../svg/shark-off.svg';

export interface ISharkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SharkOffIcon: FC<ISharkOffIconProps> = memo(props => {
  return <SharkOffSvg {...props} />;
});
