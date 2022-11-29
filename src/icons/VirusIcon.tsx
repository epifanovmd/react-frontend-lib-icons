import React, { FC, memo } from 'react';
import VirusSvg from '../svg/virus.svg';

export interface IVirusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VirusIcon: FC<IVirusIconProps> = memo(props => {
  return <VirusSvg {...props} />;
});
