import React, { FC, memo } from 'react';
import EyeSettingsOutlineSvg from '../svg/eye-settings-outline.svg';

export interface IEyeSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeSettingsOutlineIcon: FC<IEyeSettingsOutlineIconProps> = memo(props => {
  return <EyeSettingsOutlineSvg {...props} />;
});
