import React, { FC, memo } from 'react';
import SkullScanOutlineSvg from '../svg/skull-scan-outline.svg';

export interface ISkullScanOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullScanOutlineIcon: FC<ISkullScanOutlineIconProps> = memo(props => {
  return <SkullScanOutlineSvg {...props} />;
});
