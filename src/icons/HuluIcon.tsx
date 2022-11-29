import React, { FC, memo } from 'react';
import HuluSvg from '../svg/hulu.svg';

export interface IHuluIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HuluIcon: FC<IHuluIconProps> = memo(props => {
  return <HuluSvg {...props} />;
});
