import React, { FC, memo } from 'react';
import CellphoneScreenshotSvg from '../svg/cellphone-screenshot.svg';

export interface ICellphoneScreenshotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneScreenshotIcon: FC<ICellphoneScreenshotIconProps> = memo(props => {
  return <CellphoneScreenshotSvg {...props} />;
});
