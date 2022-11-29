import React, { FC, memo } from 'react';
import Numeric1BoxSvg from '../svg/numeric-1-box.svg';

export interface INumeric1BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1BoxIcon: FC<INumeric1BoxIconProps> = memo(props => {
  return <Numeric1BoxSvg {...props} />;
});
