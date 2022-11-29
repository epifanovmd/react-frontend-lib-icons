import React, { FC, memo } from 'react';
import Numeric10BoxSvg from '../svg/numeric-10-box.svg';

export interface INumeric10BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10BoxIcon: FC<INumeric10BoxIconProps> = memo(props => {
  return <Numeric10BoxSvg {...props} />;
});
