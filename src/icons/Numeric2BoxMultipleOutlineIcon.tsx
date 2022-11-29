import React, { FC, memo } from 'react';
import Numeric2BoxMultipleOutlineSvg from '../svg/numeric-2-box-multiple-outline.svg';

export interface INumeric2BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2BoxMultipleOutlineIcon: FC<INumeric2BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric2BoxMultipleOutlineSvg {...props} />;
});
