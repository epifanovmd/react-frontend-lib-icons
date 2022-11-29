import React, { FC, memo } from 'react';
import ScriptTextKeyOutlineSvg from '../svg/script-text-key-outline.svg';

export interface IScriptTextKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScriptTextKeyOutlineIcon: FC<IScriptTextKeyOutlineIconProps> = memo(props => {
  return <ScriptTextKeyOutlineSvg {...props} />;
});
