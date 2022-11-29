import React, { FC, memo } from 'react';
import PropaneTankSvg from '../svg/propane-tank.svg';

export interface IPropaneTankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PropaneTankIcon: FC<IPropaneTankIconProps> = memo(props => {
  return <PropaneTankSvg {...props} />;
});
