import React, { FC, memo } from 'react';
import Numeric9PlusBoxSvg from '../svg/numeric-9-plus-box.svg';

export interface INumeric9PlusBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusBoxIcon: FC<INumeric9PlusBoxIconProps> = memo(props => {
  return <Numeric9PlusBoxSvg {...props} />;
});
