import React, { FC, memo } from 'react';
import Numeric9PlusCircleSvg from '../svg/numeric-9-plus-circle.svg';

export interface INumeric9PlusCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusCircleIcon: FC<INumeric9PlusCircleIconProps> = memo(props => {
  return <Numeric9PlusCircleSvg {...props} />;
});
