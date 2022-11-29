import React, { FC, memo } from 'react';
import Numeric2BoxOutlineSvg from '../svg/numeric-2-box-outline.svg';

export interface INumeric2BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2BoxOutlineIcon: FC<INumeric2BoxOutlineIconProps> = memo(props => {
  return <Numeric2BoxOutlineSvg {...props} />;
});
