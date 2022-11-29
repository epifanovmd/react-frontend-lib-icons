import React, { FC, memo } from 'react';
import ApplicationSettingsOutlineSvg from '../svg/application-settings-outline.svg';

export interface IApplicationSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationSettingsOutlineIcon: FC<IApplicationSettingsOutlineIconProps> = memo(props => {
  return <ApplicationSettingsOutlineSvg {...props} />;
});
