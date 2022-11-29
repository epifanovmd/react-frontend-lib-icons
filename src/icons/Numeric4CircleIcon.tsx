import React, { FC, memo } from 'react';
import Numeric4CircleSvg from '../svg/numeric-4-circle.svg';

export interface INumeric4CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4CircleIcon: FC<INumeric4CircleIconProps> = memo(props => {
  return <Numeric4CircleSvg {...props} />;
});
