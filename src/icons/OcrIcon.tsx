import React, { FC, memo } from 'react';
import OcrSvg from '../svg/ocr.svg';

export interface IOcrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OcrIcon: FC<IOcrIconProps> = memo(props => {
  return <OcrSvg {...props} />;
});
