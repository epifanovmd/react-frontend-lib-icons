import React, { FC, memo } from 'react';
import PlusCircleMultipleOutlineSvg from '../svg/plus-circle-multiple-outline.svg';

export interface IPlusCircleMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusCircleMultipleOutlineIcon: FC<IPlusCircleMultipleOutlineIconProps> = memo(props => {
  return <PlusCircleMultipleOutlineSvg {...props} />;
});
