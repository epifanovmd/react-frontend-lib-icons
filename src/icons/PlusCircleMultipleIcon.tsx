import React, { FC, memo } from 'react';
import PlusCircleMultipleSvg from '../svg/plus-circle-multiple.svg';

export interface IPlusCircleMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusCircleMultipleIcon: FC<IPlusCircleMultipleIconProps> = memo(props => {
  return <PlusCircleMultipleSvg {...props} />;
});
