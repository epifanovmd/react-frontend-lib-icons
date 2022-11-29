import React, { FC, memo } from 'react';
import EngineOffSvg from '../svg/engine-off.svg';

export interface IEngineOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EngineOffIcon: FC<IEngineOffIconProps> = memo(props => {
  return <EngineOffSvg {...props} />;
});
