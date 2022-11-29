import React, { FC, memo } from 'react';
import MicrosoftOutlookSvg from '../svg/microsoft-outlook.svg';

export interface IMicrosoftOutlookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftOutlookIcon: FC<IMicrosoftOutlookIconProps> = memo(props => {
  return <MicrosoftOutlookSvg {...props} />;
});
