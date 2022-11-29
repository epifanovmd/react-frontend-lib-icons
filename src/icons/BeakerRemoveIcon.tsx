import React, { FC, memo } from 'react';
import BeakerRemoveSvg from '../svg/beaker-remove.svg';

export interface IBeakerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerRemoveIcon: FC<IBeakerRemoveIconProps> = memo(props => {
  return <BeakerRemoveSvg {...props} />;
});
