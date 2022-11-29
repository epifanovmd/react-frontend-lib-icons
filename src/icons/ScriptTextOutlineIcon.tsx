import React, { FC, memo } from 'react';
import ScriptTextOutlineSvg from '../svg/script-text-outline.svg';

export interface IScriptTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextOutlineIcon: FC<IScriptTextOutlineIconProps> = memo(props => {
  return <ScriptTextOutlineSvg {...props} />;
});
