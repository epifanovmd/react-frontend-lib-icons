import React, { FC, memo } from 'react';
import SkullScanSvg from '../svg/skull-scan.svg';

export interface ISkullScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullScanIcon: FC<ISkullScanIconProps> = memo(props => {
  return <SkullScanSvg {...props} />;
});
