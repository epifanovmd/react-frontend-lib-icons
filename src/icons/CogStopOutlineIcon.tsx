import React, { FC, memo } from 'react';
import CogStopOutlineSvg from '../svg/cog-stop-outline.svg';

export interface ICogStopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogStopOutlineIcon: FC<ICogStopOutlineIconProps> = memo(props => {
  return <CogStopOutlineSvg {...props} />;
});
