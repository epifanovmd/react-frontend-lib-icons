import React, { FC, memo } from 'react';
import Numeric9BoxSvg from '../svg/numeric-9-box.svg';

export interface INumeric9BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9BoxIcon: FC<INumeric9BoxIconProps> = memo(props => {
  return <Numeric9BoxSvg {...props} />;
});
