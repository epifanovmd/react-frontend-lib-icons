import React, { FC, memo } from 'react';
import StepForwardSvg from '../svg/step-forward.svg';

export interface IStepForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StepForwardIcon: FC<IStepForwardIconProps> = memo(props => {
  return <StepForwardSvg {...props} />;
});
