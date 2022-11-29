import React, { FC, memo } from 'react';
import BeakerPlusOutlineSvg from '../svg/beaker-plus-outline.svg';

export interface IBeakerPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerPlusOutlineIcon: FC<IBeakerPlusOutlineIconProps> = memo(props => {
  return <BeakerPlusOutlineSvg {...props} />;
});
