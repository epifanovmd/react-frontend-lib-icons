import React, { FC, memo } from 'react';
import Numeric9PlusBoxOutlineSvg from '../svg/numeric-9-plus-box-outline.svg';

export interface INumeric9PlusBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusBoxOutlineIcon: FC<INumeric9PlusBoxOutlineIconProps> = memo(props => {
  return <Numeric9PlusBoxOutlineSvg {...props} />;
});
