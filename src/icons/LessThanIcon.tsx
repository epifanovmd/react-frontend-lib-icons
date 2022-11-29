import React, { FC, memo } from 'react';
import LessThanSvg from '../svg/less-than.svg';

export interface ILessThanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LessThanIcon: FC<ILessThanIconProps> = memo(props => {
  return <LessThanSvg {...props} />;
});
