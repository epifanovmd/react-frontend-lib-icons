import React, { FC, memo } from 'react';
import Numeric3CircleOutlineSvg from '../svg/numeric-3-circle-outline.svg';

export interface INumeric3CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3CircleOutlineIcon: FC<INumeric3CircleOutlineIconProps> = memo(props => {
  return <Numeric3CircleOutlineSvg {...props} />;
});
