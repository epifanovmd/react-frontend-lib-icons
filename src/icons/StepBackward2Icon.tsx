import React, { FC, memo } from 'react';
import StepBackward2Svg from '../svg/step-backward-2.svg';

export interface IStepBackward2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StepBackward2Icon: FC<IStepBackward2IconProps> = memo(props => {
  return <StepBackward2Svg {...props} />;
});
