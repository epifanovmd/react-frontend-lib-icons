import React, { FC, memo } from 'react';
import ScriptOutlineSvg from '../svg/script-outline.svg';

export interface IScriptOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptOutlineIcon: FC<IScriptOutlineIconProps> = memo(props => {
  return <ScriptOutlineSvg {...props} />;
});
