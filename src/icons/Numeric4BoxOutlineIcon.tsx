import React, { FC, memo } from 'react';
import Numeric4BoxOutlineSvg from '../svg/numeric-4-box-outline.svg';

export interface INumeric4BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4BoxOutlineIcon: FC<INumeric4BoxOutlineIconProps> = memo(props => {
  return <Numeric4BoxOutlineSvg {...props} />;
});
