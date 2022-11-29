import React, { FC, memo } from 'react';
import ConsoleLineSvg from '../svg/console-line.svg';

export interface IConsoleLineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConsoleLineIcon: FC<IConsoleLineIconProps> = memo(props => {
  return <ConsoleLineSvg {...props} />;
});
