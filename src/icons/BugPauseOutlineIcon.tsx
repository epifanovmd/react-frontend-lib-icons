import React, { FC, memo } from 'react';
import BugPauseOutlineSvg from '../svg/bug-pause-outline.svg';

export interface IBugPauseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugPauseOutlineIcon: FC<IBugPauseOutlineIconProps> = memo(props => {
  return <BugPauseOutlineSvg {...props} />;
});
