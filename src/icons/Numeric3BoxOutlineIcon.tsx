import React, { FC, memo } from 'react';
import Numeric3BoxOutlineSvg from '../svg/numeric-3-box-outline.svg';

export interface INumeric3BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3BoxOutlineIcon: FC<INumeric3BoxOutlineIconProps> = memo(props => {
  return <Numeric3BoxOutlineSvg {...props} />;
});
