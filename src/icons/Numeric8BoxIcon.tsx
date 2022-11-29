import React, { FC, memo } from 'react';
import Numeric8BoxSvg from '../svg/numeric-8-box.svg';

export interface INumeric8BoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8BoxIcon: FC<INumeric8BoxIconProps> = memo(props => {
  return <Numeric8BoxSvg {...props} />;
});
