import React, { FC, memo } from 'react';
import OilLevelSvg from '../svg/oil-level.svg';

export interface IOilLevelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OilLevelIcon: FC<IOilLevelIconProps> = memo(props => {
  return <OilLevelSvg {...props} />;
});
