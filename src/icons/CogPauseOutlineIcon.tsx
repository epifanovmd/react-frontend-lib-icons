import React, { FC, memo } from 'react';
import CogPauseOutlineSvg from '../svg/cog-pause-outline.svg';

export interface ICogPauseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogPauseOutlineIcon: FC<ICogPauseOutlineIconProps> = memo(props => {
  return <CogPauseOutlineSvg {...props} />;
});
