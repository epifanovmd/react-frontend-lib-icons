import React, { FC, memo } from 'react';
import Numeric7BoxSvg from '../svg/numeric-7-box.svg';

export interface INumeric7BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7BoxIcon: FC<INumeric7BoxIconProps> = memo(props => {
  return <Numeric7BoxSvg {...props} />;
});
