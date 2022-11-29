import React, { FC, memo } from 'react';
import SnowmanSvg from '../svg/snowman.svg';

export interface ISnowmanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowmanIcon: FC<ISnowmanIconProps> = memo(props => {
  return <SnowmanSvg {...props} />;
});
