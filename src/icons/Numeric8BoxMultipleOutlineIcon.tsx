import React, { FC, memo } from 'react';
import Numeric8BoxMultipleOutlineSvg from '../svg/numeric-8-box-multiple-outline.svg';

export interface INumeric8BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8BoxMultipleOutlineIcon: FC<INumeric8BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric8BoxMultipleOutlineSvg {...props} />;
});
