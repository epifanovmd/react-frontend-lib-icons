import React, { FC, memo } from 'react';
import Numeric0BoxOutlineSvg from '../svg/numeric-0-box-outline.svg';

export interface INumeric0BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0BoxOutlineIcon: FC<INumeric0BoxOutlineIconProps> = memo(props => {
  return <Numeric0BoxOutlineSvg {...props} />;
});
