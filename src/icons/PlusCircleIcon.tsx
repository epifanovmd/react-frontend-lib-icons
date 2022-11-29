import React, { FC, memo } from 'react';
import PlusCircleSvg from '../svg/plus-circle.svg';

export interface IPlusCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusCircleIcon: FC<IPlusCircleIconProps> = memo(props => {
  return <PlusCircleSvg {...props} />;
});
