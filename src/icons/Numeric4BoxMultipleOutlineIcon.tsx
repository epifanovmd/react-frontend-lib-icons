import React, { FC, memo } from 'react';
import Numeric4BoxMultipleOutlineSvg from '../svg/numeric-4-box-multiple-outline.svg';

export interface INumeric4BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4BoxMultipleOutlineIcon: FC<INumeric4BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric4BoxMultipleOutlineSvg {...props} />;
});
