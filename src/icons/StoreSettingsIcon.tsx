import React, { FC, memo } from 'react';
import StoreSettingsSvg from '../svg/store-settings.svg';

export interface IStoreSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreSettingsIcon: FC<IStoreSettingsIconProps> = memo(props => {
  return <StoreSettingsSvg {...props} />;
});
