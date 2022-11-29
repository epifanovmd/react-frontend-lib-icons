import React, { FC, memo } from 'react';
import StarSettingsOutlineSvg from '../svg/star-settings-outline.svg';

export interface IStarSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarSettingsOutlineIcon: FC<IStarSettingsOutlineIconProps> = memo(props => {
  return <StarSettingsOutlineSvg {...props} />;
});
