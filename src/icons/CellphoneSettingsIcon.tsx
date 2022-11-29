import React, { FC, memo } from 'react';
import CellphoneSettingsSvg from '../svg/cellphone-settings.svg';

export interface ICellphoneSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneSettingsIcon: FC<ICellphoneSettingsIconProps> = memo(props => {
  return <CellphoneSettingsSvg {...props} />;
});
