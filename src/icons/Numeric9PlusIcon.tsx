import React, { FC, memo } from 'react';
import Numeric9PlusSvg from '../svg/numeric-9-plus.svg';

export interface INumeric9PlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9PlusIcon: FC<INumeric9PlusIconProps> = memo(props => {
  return <Numeric9PlusSvg {...props} />;
});
