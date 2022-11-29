import React, { FC, memo } from 'react';
import CeilingLightSvg from '../svg/ceiling-light.svg';

export interface ICeilingLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingLightIcon: FC<ICeilingLightIconProps> = memo(props => {
  return <CeilingLightSvg {...props} />;
});
