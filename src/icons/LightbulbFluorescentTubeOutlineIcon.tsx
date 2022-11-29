import React, { FC, memo } from 'react';
import LightbulbFluorescentTubeOutlineSvg from '../svg/lightbulb-fluorescent-tube-outline.svg';

export interface ILightbulbFluorescentTubeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbFluorescentTubeOutlineIcon: FC<ILightbulbFluorescentTubeOutlineIconProps> = memo(props => {
  return <LightbulbFluorescentTubeOutlineSvg {...props} />;
});
