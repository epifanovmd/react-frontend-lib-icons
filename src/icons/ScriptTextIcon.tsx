import React, { FC, memo } from 'react';
import ScriptTextSvg from '../svg/script-text.svg';

export interface IScriptTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextIcon: FC<IScriptTextIconProps> = memo(props => {
  return <ScriptTextSvg {...props} />;
});
