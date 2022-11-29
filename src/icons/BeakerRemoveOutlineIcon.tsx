import React, { FC, memo } from 'react';
import BeakerRemoveOutlineSvg from '../svg/beaker-remove-outline.svg';

export interface IBeakerRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerRemoveOutlineIcon: FC<IBeakerRemoveOutlineIconProps> = memo(props => {
  return <BeakerRemoveOutlineSvg {...props} />;
});
