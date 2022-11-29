import React, { FC, memo } from 'react';
import PlusOutlineSvg from '../svg/plus-outline.svg';

export interface IPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusOutlineIcon: FC<IPlusOutlineIconProps> = memo(props => {
  return <PlusOutlineSvg {...props} />;
});
