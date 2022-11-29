import React, { FC, memo } from 'react';
import StomachSvg from '../svg/stomach.svg';

export interface IStomachIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StomachIcon: FC<IStomachIconProps> = memo(props => {
  return <StomachSvg {...props} />;
});
