import React, { FC, memo } from 'react';
import PlusBoxMultipleOutlineSvg from '../svg/plus-box-multiple-outline.svg';

export interface IPlusBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusBoxMultipleOutlineIcon: FC<IPlusBoxMultipleOutlineIconProps> = memo(props => {
  return <PlusBoxMultipleOutlineSvg {...props} />;
});
