import React, { FC, memo } from 'react';
import GoogleSpreadsheetSvg from '../svg/google-spreadsheet.svg';

export interface IGoogleSpreadsheetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleSpreadsheetIcon: FC<IGoogleSpreadsheetIconProps> = memo(props => {
  return <GoogleSpreadsheetSvg {...props} />;
});
