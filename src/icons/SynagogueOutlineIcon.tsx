import React, { FC, memo } from 'react';
import SynagogueOutlineSvg from '../svg/synagogue-outline.svg';

export interface ISynagogueOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SynagogueOutlineIcon: FC<ISynagogueOutlineIconProps> = memo(props => {
  return <SynagogueOutlineSvg {...props} />;
});
