import React, { FC, memo } from 'react';
import Numeric6BoxMultipleOutlineSvg from '../svg/numeric-6-box-multiple-outline.svg';

export interface INumeric6BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6BoxMultipleOutlineIcon: FC<INumeric6BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric6BoxMultipleOutlineSvg {...props} />;
});
