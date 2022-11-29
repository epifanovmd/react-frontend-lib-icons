import React, { FC, memo } from 'react';
import PlusCircleOutlineSvg from '../svg/plus-circle-outline.svg';

export interface IPlusCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusCircleOutlineIcon: FC<IPlusCircleOutlineIconProps> = memo(props => {
  return <PlusCircleOutlineSvg {...props} />;
});
