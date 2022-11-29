import React, { FC, memo } from 'react';
import PlaySvg from '../svg/play.svg';

export interface IPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayIcon: FC<IPlayIconProps> = memo(props => {
  return <PlaySvg {...props} />;
});
