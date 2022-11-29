import React, { FC, memo } from 'react';
import TelevisionClassicOffSvg from '../svg/television-classic-off.svg';

export interface ITelevisionClassicOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionClassicOffIcon: FC<ITelevisionClassicOffIconProps> = memo(props => {
  return <TelevisionClassicOffSvg {...props} />;
});
