import React, { FC, memo } from 'react';
import Numeric9BoxOutlineSvg from '../svg/numeric-9-box-outline.svg';

export interface INumeric9BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9BoxOutlineIcon: FC<INumeric9BoxOutlineIconProps> = memo(props => {
  return <Numeric9BoxOutlineSvg {...props} />;
});
