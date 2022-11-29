import React, { FC, memo } from 'react';
import Numeric8BoxOutlineSvg from '../svg/numeric-8-box-outline.svg';

export interface INumeric8BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8BoxOutlineIcon: FC<INumeric8BoxOutlineIconProps> = memo(props => {
  return <Numeric8BoxOutlineSvg {...props} />;
});
