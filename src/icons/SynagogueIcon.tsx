import React, { FC, memo } from 'react';
import SynagogueSvg from '../svg/synagogue.svg';

export interface ISynagogueIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SynagogueIcon: FC<ISynagogueIconProps> = memo(props => {
  return <SynagogueSvg {...props} />;
});
