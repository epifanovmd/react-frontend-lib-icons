import React, { FC, memo } from 'react';
import TapeDriveSvg from '../svg/tape-drive.svg';

export interface ITapeDriveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TapeDriveIcon: FC<ITapeDriveIconProps> = memo(props => {
  return <TapeDriveSvg {...props} />;
});
