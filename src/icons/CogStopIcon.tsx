import React, { FC, memo } from 'react';
import CogStopSvg from '../svg/cog-stop.svg';

export interface ICogStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogStopIcon: FC<ICogStopIconProps> = memo(props => {
  return <CogStopSvg {...props} />;
});
