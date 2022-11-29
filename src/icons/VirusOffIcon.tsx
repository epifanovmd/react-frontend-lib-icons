import React, { FC, memo } from 'react';
import VirusOffSvg from '../svg/virus-off.svg';

export interface IVirusOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VirusOffIcon: FC<IVirusOffIconProps> = memo(props => {
  return <VirusOffSvg {...props} />;
});
