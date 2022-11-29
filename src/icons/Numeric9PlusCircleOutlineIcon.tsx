import React, { FC, memo } from 'react';
import Numeric9PlusCircleOutlineSvg from '../svg/numeric-9-plus-circle-outline.svg';

export interface INumeric9PlusCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusCircleOutlineIcon: FC<INumeric9PlusCircleOutlineIconProps> = memo(props => {
  return <Numeric9PlusCircleOutlineSvg {...props} />;
});
