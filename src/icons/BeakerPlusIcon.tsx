import React, { FC, memo } from 'react';
import BeakerPlusSvg from '../svg/beaker-plus.svg';

export interface IBeakerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerPlusIcon: FC<IBeakerPlusIconProps> = memo(props => {
  return <BeakerPlusSvg {...props} />;
});
