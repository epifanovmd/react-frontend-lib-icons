import React, { FC, memo } from 'react';
import Numeric7BoxMultipleOutlineSvg from '../svg/numeric-7-box-multiple-outline.svg';

export interface INumeric7BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7BoxMultipleOutlineIcon: FC<INumeric7BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric7BoxMultipleOutlineSvg {...props} />;
});
