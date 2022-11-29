import React, { FC, memo } from 'react';
import HeartSettingsOutlineSvg from '../svg/heart-settings-outline.svg';

export interface IHeartSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartSettingsOutlineIcon: FC<IHeartSettingsOutlineIconProps> = memo(props => {
  return <HeartSettingsOutlineSvg {...props} />;
});
