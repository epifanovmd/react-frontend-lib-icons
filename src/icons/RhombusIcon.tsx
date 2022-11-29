import React, { FC, memo } from 'react';
import RhombusSvg from '../svg/rhombus.svg';

export interface IRhombusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusIcon: FC<IRhombusIconProps> = memo(props => {
  return <RhombusSvg {...props} />;
});
