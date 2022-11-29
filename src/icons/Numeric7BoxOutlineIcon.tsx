import React, { FC, memo } from 'react';
import Numeric7BoxOutlineSvg from '../svg/numeric-7-box-outline.svg';

export interface INumeric7BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7BoxOutlineIcon: FC<INumeric7BoxOutlineIconProps> = memo(props => {
  return <Numeric7BoxOutlineSvg {...props} />;
});
