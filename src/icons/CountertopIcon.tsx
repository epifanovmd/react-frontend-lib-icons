import React, { FC, memo } from 'react';
import CountertopSvg from '../svg/countertop.svg';

export interface ICountertopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CountertopIcon: FC<ICountertopIconProps> = memo(props => {
  return <CountertopSvg {...props} />;
});
