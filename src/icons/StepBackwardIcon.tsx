import React, { FC, memo } from 'react';
import StepBackwardSvg from '../svg/step-backward.svg';

export interface IStepBackwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StepBackwardIcon: FC<IStepBackwardIconProps> = memo(props => {
  return <StepBackwardSvg {...props} />;
});
