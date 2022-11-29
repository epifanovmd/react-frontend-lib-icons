import React, { FC, memo } from 'react';
import Numeric3BoxSvg from '../svg/numeric-3-box.svg';

export interface INumeric3BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3BoxIcon: FC<INumeric3BoxIconProps> = memo(props => {
  return <Numeric3BoxSvg {...props} />;
});
