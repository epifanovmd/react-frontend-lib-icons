import React, { FC, memo } from 'react';
import MicrosoftAzureSvg from '../svg/microsoft-azure.svg';

export interface IMicrosoftAzureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftAzureIcon: FC<IMicrosoftAzureIconProps> = memo(props => {
  return <MicrosoftAzureSvg {...props} />;
});
