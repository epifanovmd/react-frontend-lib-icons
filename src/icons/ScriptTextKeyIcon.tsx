import React, { FC, memo } from 'react';
import ScriptTextKeySvg from '../svg/script-text-key.svg';

export interface IScriptTextKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextKeyIcon: FC<IScriptTextKeyIconProps> = memo(props => {
  return <ScriptTextKeySvg {...props} />;
});
