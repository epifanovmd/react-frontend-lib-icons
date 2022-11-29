import React, { FC, memo } from 'react';
import CandelabraFireSvg from '../svg/candelabra-fire.svg';

export interface ICandelabraFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandelabraFireIcon: FC<ICandelabraFireIconProps> = memo(props => {
  return <CandelabraFireSvg {...props} />;
});
