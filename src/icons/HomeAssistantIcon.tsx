import React, { FC, memo } from 'react';
import HomeAssistantSvg from '../svg/home-assistant.svg';

export interface IHomeAssistantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAssistantIcon: FC<IHomeAssistantIconProps> = memo(props => {
  return <HomeAssistantSvg {...props} />;
});
