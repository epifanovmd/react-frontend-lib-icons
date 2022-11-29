import React, { FC, memo } from 'react';
import ConsoleSvg from '../svg/console.svg';

export interface IConsoleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConsoleIcon: FC<IConsoleIconProps> = memo(props => {
  return <ConsoleSvg {...props} />;
});
