import React, { FC, memo } from 'react';
import SafetyGogglesSvg from '../svg/safety-goggles.svg';

export interface ISafetyGogglesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SafetyGogglesIcon: FC<ISafetyGogglesIconProps> = memo(props => {
  return <SafetyGogglesSvg {...props} />;
});
