import React, { FC, memo } from 'react';
import Numeric5BoxOutlineSvg from '../svg/numeric-5-box-outline.svg';

export interface INumeric5BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5BoxOutlineIcon: FC<INumeric5BoxOutlineIconProps> = memo(props => {
  return <Numeric5BoxOutlineSvg {...props} />;
});
