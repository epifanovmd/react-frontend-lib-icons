import React, { FC, memo } from 'react';
import VolcanoSvg from '../svg/volcano.svg';

export interface IVolcanoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolcanoIcon: FC<IVolcanoIconProps> = memo(props => {
  return <VolcanoSvg {...props} />;
});
