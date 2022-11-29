import React, { FC, memo } from 'react';
import MicrosoftInternetExplorerSvg from '../svg/microsoft-internet-explorer.svg';

export interface IMicrosoftInternetExplorerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftInternetExplorerIcon: FC<IMicrosoftInternetExplorerIconProps> = memo(props => {
  return <MicrosoftInternetExplorerSvg {...props} />;
});
