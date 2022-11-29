import React, { FC, memo } from 'react';
import Numeric9CircleSvg from '../svg/numeric-9-circle.svg';

export interface INumeric9CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9CircleIcon: FC<INumeric9CircleIconProps> = memo(props => {
  return <Numeric9CircleSvg {...props} />;
});
