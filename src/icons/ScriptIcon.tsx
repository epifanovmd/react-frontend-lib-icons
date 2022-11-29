import React, { FC, memo } from 'react';
import ScriptSvg from '../svg/script.svg';

export interface IScriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptIcon: FC<IScriptIconProps> = memo(props => {
  return <ScriptSvg {...props} />;
});
