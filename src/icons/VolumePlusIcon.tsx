import React, { FC, memo } from 'react';
import VolumePlusSvg from '../svg/volume-plus.svg';

export interface IVolumePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumePlusIcon: FC<IVolumePlusIconProps> = memo(props => {
  return <VolumePlusSvg {...props} />;
});
