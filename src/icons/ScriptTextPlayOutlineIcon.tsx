import React, { FC, memo } from 'react';
import ScriptTextPlayOutlineSvg from '../svg/script-text-play-outline.svg';

export interface IScriptTextPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextPlayOutlineIcon: FC<IScriptTextPlayOutlineIconProps> = memo(props => {
  return <ScriptTextPlayOutlineSvg {...props} />;
});
