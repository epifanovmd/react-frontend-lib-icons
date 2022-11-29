import React, { FC, memo } from 'react';
import ScannerSvg from '../svg/scanner.svg';

export interface IScannerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScannerIcon: FC<IScannerIconProps> = memo(props => {
  return <ScannerSvg {...props} />;
});
