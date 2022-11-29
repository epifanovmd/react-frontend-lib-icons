import React, { FC, memo } from 'react';
import PlayBoxMultipleSvg from '../svg/play-box-multiple.svg';

export interface IPlayBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxMultipleIcon: FC<IPlayBoxMultipleIconProps> = memo(props => {
  return <PlayBoxMultipleSvg {...props} />;
});
