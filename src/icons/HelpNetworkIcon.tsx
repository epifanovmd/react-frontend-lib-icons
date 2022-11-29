import React, { FC, memo } from 'react';
import HelpNetworkSvg from '../svg/help-network.svg';

export interface IHelpNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpNetworkIcon: FC<IHelpNetworkIconProps> = memo(props => {
  return <HelpNetworkSvg {...props} />;
});
