import React, { FC, memo } from 'react';
import PlusBoxOutlineSvg from '../svg/plus-box-outline.svg';

export interface IPlusBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusBoxOutlineIcon: FC<IPlusBoxOutlineIconProps> = memo(props => {
  return <PlusBoxOutlineSvg {...props} />;
});
