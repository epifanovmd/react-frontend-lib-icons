import React, { FC, memo } from 'react';
import MicrosoftAzureDevopsSvg from '../svg/microsoft-azure-devops.svg';

export interface IMicrosoftAzureDevopsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftAzureDevopsIcon: FC<IMicrosoftAzureDevopsIconProps> = memo(props => {
  return <MicrosoftAzureDevopsSvg {...props} />;
});
