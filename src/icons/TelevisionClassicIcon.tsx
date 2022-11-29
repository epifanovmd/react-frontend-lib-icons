import React, { FC, memo } from 'react';
import TelevisionClassicSvg from '../svg/television-classic.svg';

export interface ITelevisionClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionClassicIcon: FC<ITelevisionClassicIconProps> = memo(props => {
  return <TelevisionClassicSvg {...props} />;
});
