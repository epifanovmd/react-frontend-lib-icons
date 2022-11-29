import React, { FC, memo } from 'react';
import Numeric0BoxMultipleOutlineSvg from '../svg/numeric-0-box-multiple-outline.svg';

export interface INumeric0BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0BoxMultipleOutlineIcon: FC<INumeric0BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric0BoxMultipleOutlineSvg {...props} />;
});
