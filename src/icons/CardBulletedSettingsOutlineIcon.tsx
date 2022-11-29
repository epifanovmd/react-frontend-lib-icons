import React, { FC, memo } from 'react';
import CardBulletedSettingsOutlineSvg from '../svg/card-bulleted-settings-outline.svg';

export interface ICardBulletedSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedSettingsOutlineIcon: FC<ICardBulletedSettingsOutlineIconProps> = memo(props => {
  return <CardBulletedSettingsOutlineSvg {...props} />;
});
