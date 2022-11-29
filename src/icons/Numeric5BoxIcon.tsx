import React, { FC, memo } from 'react';
import Numeric5BoxSvg from '../svg/numeric-5-box.svg';

export interface INumeric5BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5BoxIcon: FC<INumeric5BoxIconProps> = memo(props => {
  return <Numeric5BoxSvg {...props} />;
});
