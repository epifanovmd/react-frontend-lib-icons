import React, { FC, memo } from 'react';
import Numeric10CircleSvg from '../svg/numeric-10-circle.svg';

export interface INumeric10CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10CircleIcon: FC<INumeric10CircleIconProps> = memo(props => {
  return <Numeric10CircleSvg {...props} />;
});
