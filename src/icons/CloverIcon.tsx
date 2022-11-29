import React, { FC, memo } from 'react';
import CloverSvg from '../svg/clover.svg';

export interface ICloverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloverIcon: FC<ICloverIconProps> = memo(props => {
  return <CloverSvg {...props} />;
});
