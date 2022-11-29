import React, { FC, memo } from 'react';
import PotMixSvg from '../svg/pot-mix.svg';

export interface IPotMixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotMixIcon: FC<IPotMixIconProps> = memo(props => {
  return <PotMixSvg {...props} />;
});
