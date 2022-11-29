import React, { FC, memo } from 'react';
import QuadcopterSvg from '../svg/quadcopter.svg';

export interface IQuadcopterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QuadcopterIcon: FC<IQuadcopterIconProps> = memo(props => {
  return <QuadcopterSvg {...props} />;
});
