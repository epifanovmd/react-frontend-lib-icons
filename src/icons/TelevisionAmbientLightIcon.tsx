import React, { FC, memo } from 'react';
import TelevisionAmbientLightSvg from '../svg/television-ambient-light.svg';

export interface ITelevisionAmbientLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionAmbientLightIcon: FC<ITelevisionAmbientLightIconProps> = memo(props => {
  return <TelevisionAmbientLightSvg {...props} />;
});
