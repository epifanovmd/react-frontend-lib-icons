import React, { FC, memo } from 'react';
import CeilingLightMultipleSvg from '../svg/ceiling-light-multiple.svg';

export interface ICeilingLightMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingLightMultipleIcon: FC<ICeilingLightMultipleIconProps> = memo(props => {
  return <CeilingLightMultipleSvg {...props} />;
});
