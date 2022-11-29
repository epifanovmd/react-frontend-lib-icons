import React, { FC, memo } from 'react';
import Numeric5CircleSvg from '../svg/numeric-5-circle.svg';

export interface INumeric5CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5CircleIcon: FC<INumeric5CircleIconProps> = memo(props => {
  return <Numeric5CircleSvg {...props} />;
});
