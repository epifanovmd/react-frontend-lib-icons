import React, { FC, memo } from 'react';
import Numeric6BoxSvg from '../svg/numeric-6-box.svg';

export interface INumeric6BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6BoxIcon: FC<INumeric6BoxIconProps> = memo(props => {
  return <Numeric6BoxSvg {...props} />;
});
