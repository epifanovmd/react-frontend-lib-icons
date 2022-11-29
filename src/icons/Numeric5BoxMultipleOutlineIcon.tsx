import React, { FC, memo } from 'react';
import Numeric5BoxMultipleOutlineSvg from '../svg/numeric-5-box-multiple-outline.svg';

export interface INumeric5BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5BoxMultipleOutlineIcon: FC<INumeric5BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric5BoxMultipleOutlineSvg {...props} />;
});
