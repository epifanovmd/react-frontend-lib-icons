import React, { FC, memo } from 'react';
import Numeric9PlusBoxMultipleOutlineSvg from '../svg/numeric-9-plus-box-multiple-outline.svg';

export interface INumeric9PlusBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusBoxMultipleOutlineIcon: FC<INumeric9PlusBoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric9PlusBoxMultipleOutlineSvg {...props} />;
});
