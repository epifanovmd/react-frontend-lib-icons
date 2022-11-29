import React, { FC, memo } from 'react';
import MicrosoftSharepointSvg from '../svg/microsoft-sharepoint.svg';

export interface IMicrosoftSharepointIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftSharepointIcon: FC<IMicrosoftSharepointIconProps> = memo(props => {
  return <MicrosoftSharepointSvg {...props} />;
});
