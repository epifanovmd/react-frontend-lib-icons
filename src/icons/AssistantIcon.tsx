import React, { FC, memo } from 'react';
import AssistantSvg from '../svg/assistant.svg';

export interface IAssistantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AssistantIcon: FC<IAssistantIconProps> = memo(props => {
  return <AssistantSvg {...props} />;
});
