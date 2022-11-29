import React, { FC, memo } from 'react';
import LightFloodDownSvg from '../svg/light-flood-down.svg';

export interface ILightFloodDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightFloodDownIcon: FC<ILightFloodDownIconProps> = memo(props => {
  return <LightFloodDownSvg {...props} />;
});
