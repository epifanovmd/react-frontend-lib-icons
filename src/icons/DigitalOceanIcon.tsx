import React, { FC, memo } from 'react';
import DigitalOceanSvg from '../svg/digital-ocean.svg';

export interface IDigitalOceanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DigitalOceanIcon: FC<IDigitalOceanIconProps> = memo(props => {
  return <DigitalOceanSvg {...props} />;
});
