import React, { FC, memo } from 'react';
import HelpNetworkOutlineSvg from '../svg/help-network-outline.svg';

export interface IHelpNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpNetworkOutlineIcon: FC<IHelpNetworkOutlineIconProps> = memo(props => {
  return <HelpNetworkOutlineSvg {...props} />;
});
