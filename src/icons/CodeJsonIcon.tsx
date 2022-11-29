import React, { FC, memo } from 'react';
import CodeJsonSvg from '../svg/code-json.svg';

export interface ICodeJsonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeJsonIcon: FC<ICodeJsonIconProps> = memo(props => {
  return <CodeJsonSvg {...props} />;
});
