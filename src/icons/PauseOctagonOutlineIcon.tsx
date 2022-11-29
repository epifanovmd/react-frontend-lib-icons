import React, { FC, memo } from 'react';
import PauseOctagonOutlineSvg from '../svg/pause-octagon-outline.svg';

export interface IPauseOctagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseOctagonOutlineIcon: FC<IPauseOctagonOutlineIconProps> = memo(props => {
  return <PauseOctagonOutlineSvg {...props} />;
});
