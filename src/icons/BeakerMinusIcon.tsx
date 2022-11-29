import React, { FC, memo } from 'react';
import BeakerMinusSvg from '../svg/beaker-minus.svg';

export interface IBeakerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerMinusIcon: FC<IBeakerMinusIconProps> = memo(props => {
  return <BeakerMinusSvg {...props} />;
});
