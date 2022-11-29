import React, { FC, memo } from 'react';
import PlayBoxSvg from '../svg/play-box.svg';

export interface IPlayBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxIcon: FC<IPlayBoxIconProps> = memo(props => {
  return <PlayBoxSvg {...props} />;
});
