import React, { FC, memo } from 'react';
import PrinterSettingsSvg from '../svg/printer-settings.svg';

export interface IPrinterSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterSettingsIcon: FC<IPrinterSettingsIconProps> = memo(props => {
  return <PrinterSettingsSvg {...props} />;
});
