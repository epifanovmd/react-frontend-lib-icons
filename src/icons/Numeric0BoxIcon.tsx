import React, { FC, memo } from 'react';
import Numeric0BoxSvg from '../svg/numeric-0-box.svg';

export interface INumeric0BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0BoxIcon: FC<INumeric0BoxIconProps> = memo(props => {
  return <Numeric0BoxSvg {...props} />;
});
