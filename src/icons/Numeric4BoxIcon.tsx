import React, { FC, memo } from 'react';
import Numeric4BoxSvg from '../svg/numeric-4-box.svg';

export interface INumeric4BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4BoxIcon: FC<INumeric4BoxIconProps> = memo(props => {
  return <Numeric4BoxSvg {...props} />;
});
