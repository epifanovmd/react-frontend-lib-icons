import React, { FC, memo } from 'react';
import GoogleAssistantSvg from '../svg/google-assistant.svg';

export interface IGoogleAssistantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleAssistantIcon: FC<IGoogleAssistantIconProps> = memo(props => {
  return <GoogleAssistantSvg {...props} />;
});
