import React, { FC, memo } from 'react';
import PauseBoxOutlineSvg from '../svg/pause-box-outline.svg';

export interface IPauseBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseBoxOutlineIcon: FC<IPauseBoxOutlineIconProps> = memo(props => {
  return <PauseBoxOutlineSvg {...props} />;
});
