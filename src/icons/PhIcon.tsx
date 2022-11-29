import React, { FC, memo } from 'react';
import PhSvg from '../svg/ph.svg';

export interface IPhIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhIcon: FC<IPhIconProps> = memo(props => {
  return <PhSvg {...props} />;
});
