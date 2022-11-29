import React, { FC, memo } from 'react';
import HandFrontLeftSvg from '../svg/hand-front-left.svg';

export interface IHandFrontLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandFrontLeftIcon: FC<IHandFrontLeftIconProps> = memo(props => {
  return <HandFrontLeftSvg {...props} />;
});
