import React, { FC, memo } from 'react';
import GreaterThanSvg from '../svg/greater-than.svg';

export interface IGreaterThanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GreaterThanIcon: FC<IGreaterThanIconProps> = memo(props => {
  return <GreaterThanSvg {...props} />;
});
