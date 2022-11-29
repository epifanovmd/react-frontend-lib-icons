import React, { FC, memo } from 'react';
import Numeric9PlusBoxMultipleSvg from '../svg/numeric-9-plus-box-multiple.svg';

export interface INumeric9PlusBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusBoxMultipleIcon: FC<INumeric9PlusBoxMultipleIconProps> = memo(props => {
  return <Numeric9PlusBoxMultipleSvg {...props} />;
});
