import React, { FC, memo } from 'react';
import CardBulletedSettingsSvg from '../svg/card-bulleted-settings.svg';

export interface ICardBulletedSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedSettingsIcon: FC<ICardBulletedSettingsIconProps> = memo(props => {
  return <CardBulletedSettingsSvg {...props} />;
});
