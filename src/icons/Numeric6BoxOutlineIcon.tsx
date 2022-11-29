import React, { FC, memo } from 'react';
import Numeric6BoxOutlineSvg from '../svg/numeric-6-box-outline.svg';

export interface INumeric6BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6BoxOutlineIcon: FC<INumeric6BoxOutlineIconProps> = memo(props => {
  return <Numeric6BoxOutlineSvg {...props} />;
});
