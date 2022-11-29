import React, { FC, memo } from 'react';
import ConsoleNetworkSvg from '../svg/console-network.svg';

export interface IConsoleNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConsoleNetworkIcon: FC<IConsoleNetworkIconProps> = memo(props => {
  return <ConsoleNetworkSvg {...props} />;
});
