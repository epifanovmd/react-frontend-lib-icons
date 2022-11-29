import React, { FC, memo } from 'react';
import Numeric2BoxSvg from '../svg/numeric-2-box.svg';

export interface INumeric2BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2BoxIcon: FC<INumeric2BoxIconProps> = memo(props => {
  return <Numeric2BoxSvg {...props} />;
});
