import React, { FC, memo } from 'react';
import LightbulbFluorescentTubeSvg from '../svg/lightbulb-fluorescent-tube.svg';

export interface ILightbulbFluorescentTubeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbFluorescentTubeIcon: FC<ILightbulbFluorescentTubeIconProps> = memo(props => {
  return <LightbulbFluorescentTubeSvg {...props} />;
});
