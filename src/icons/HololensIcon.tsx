import React, { FC, memo } from 'react';
import HololensSvg from '../svg/hololens.svg';

export interface IHololensIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HololensIcon: FC<IHololensIconProps> = memo(props => {
  return <HololensSvg {...props} />;
});
