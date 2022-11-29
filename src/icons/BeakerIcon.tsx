import React, { FC, memo } from 'react';
import BeakerSvg from '../svg/beaker.svg';

export interface IBeakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerIcon: FC<IBeakerIconProps> = memo(props => {
  return <BeakerSvg {...props} />;
});
