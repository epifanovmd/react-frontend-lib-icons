import React, { FC, memo } from 'react';
import TwitchSvg from '../svg/twitch.svg';

export interface ITwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TwitchIcon: FC<ITwitchIconProps> = memo(props => {
  return <TwitchSvg {...props} />;
});
