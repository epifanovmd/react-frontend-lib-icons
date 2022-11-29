import React, { FC, memo } from 'react';
import DiscPlayerSvg from '../svg/disc-player.svg';

export interface IDiscPlayerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiscPlayerIcon: FC<IDiscPlayerIconProps> = memo(props => {
  return <DiscPlayerSvg {...props} />;
});
