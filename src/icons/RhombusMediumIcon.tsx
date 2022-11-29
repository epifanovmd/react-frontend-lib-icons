import React, { FC, memo } from 'react';
import RhombusMediumSvg from '../svg/rhombus-medium.svg';

export interface IRhombusMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusMediumIcon: FC<IRhombusMediumIconProps> = memo(props => {
  return <RhombusMediumSvg {...props} />;
});
