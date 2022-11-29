import React, { FC, memo } from 'react';
import GoogleDriveSvg from '../svg/google-drive.svg';

export interface IGoogleDriveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleDriveIcon: FC<IGoogleDriveIconProps> = memo(props => {
  return <GoogleDriveSvg {...props} />;
});
