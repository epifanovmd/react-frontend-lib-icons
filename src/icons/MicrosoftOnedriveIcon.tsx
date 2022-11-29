import React, { FC, memo } from 'react';
import MicrosoftOnedriveSvg from '../svg/microsoft-onedrive.svg';

export interface IMicrosoftOnedriveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftOnedriveIcon: FC<IMicrosoftOnedriveIconProps> = memo(props => {
  return <MicrosoftOnedriveSvg {...props} />;
});
