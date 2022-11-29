import React, { FC, memo } from 'react';
import LungsSvg from '../svg/lungs.svg';

export interface ILungsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LungsIcon: FC<ILungsIconProps> = memo(props => {
  return <LungsSvg {...props} />;
});
