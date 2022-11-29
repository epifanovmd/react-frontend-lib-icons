import React, { FC, memo } from 'react';
import Numeric9BoxMultipleOutlineSvg from '../svg/numeric-9-box-multiple-outline.svg';

export interface INumeric9BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9BoxMultipleOutlineIcon: FC<INumeric9BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric9BoxMultipleOutlineSvg {...props} />;
});
