import React, { FC, memo } from 'react';
import EngineSvg from '../svg/engine.svg';

export interface IEngineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EngineIcon: FC<IEngineIconProps> = memo(props => {
  return <EngineSvg {...props} />;
});
