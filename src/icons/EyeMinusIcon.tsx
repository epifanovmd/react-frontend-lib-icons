import React, { FC, memo } from 'react';
import EyeMinusSvg from '../svg/eye-minus.svg';

export interface IEyeMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeMinusIcon: FC<IEyeMinusIconProps> = memo(props => {
  return <EyeMinusSvg {...props} />;
});
