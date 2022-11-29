import React, { FC, memo } from 'react';
import PencilBoxMultipleSvg from '../svg/pencil-box-multiple.svg';

export interface IPencilBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilBoxMultipleIcon: FC<IPencilBoxMultipleIconProps> = memo(props => {
  return <PencilBoxMultipleSvg {...props} />;
});
