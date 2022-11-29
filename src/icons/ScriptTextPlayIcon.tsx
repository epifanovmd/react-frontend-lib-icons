import React, { FC, memo } from 'react';
import ScriptTextPlaySvg from '../svg/script-text-play.svg';

export interface IScriptTextPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextPlayIcon: FC<IScriptTextPlayIconProps> = memo(props => {
  return <ScriptTextPlaySvg {...props} />;
});
