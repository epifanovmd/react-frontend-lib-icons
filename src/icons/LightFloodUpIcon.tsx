import React, { FC, memo } from 'react';
import LightFloodUpSvg from '../svg/light-flood-up.svg';

export interface ILightFloodUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightFloodUpIcon: FC<ILightFloodUpIconProps> = memo(props => {
  return <LightFloodUpSvg {...props} />;
});
